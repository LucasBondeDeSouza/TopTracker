import axios from "axios";

export const fetchSearchArtists = async (token, search) => {
    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(search)}&type=artist`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        // Definindo os critérios de relevância (ajuste conforme necessário)
        const MIN_POPULARITY = 50;  // Popularidade mínima
        const MIN_FOLLOWERS = 10000;  // Número mínimo de seguidores

        return response.data.artists.items
            .filter(artist => {
                // Filtra artistas que têm imagem, têm popularidade acima do mínimo e seguidores suficientes
                return artist.images.length > 0 && 
                       artist.popularity >= MIN_POPULARITY && 
                       artist.followers.total >= MIN_FOLLOWERS;
            })
            .map(artist => ({
                id: artist.id,
                artist: artist.name,
                image: artist.images[0].url,
                popularity: artist.popularity,
                followers: artist.followers.total
            }));
    } catch (error) {
        console.error("Erro ao buscar artistas:", error);
        return [];
    }
};

export const fetchArtistsByGenre = async (token, genre, country) => {
    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/search?q=genre:${genre}&type=artist&market=${country}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data.artists.items.map(artist => ({
            id: artist.id,
            artist: artist.name,
            image: artist.images.length > 0 ? artist.images[0].url : "", // Pega a imagem média (ou vazio se não houver)
        }));
    } catch (error) {
        console.error("Erro ao buscar artistas:", error);
        return [];
    }
};

export const fetchPlaylistsByCountry = async (token, country) => {
    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/search?q=top&type=playlist&market=${country}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        // Filtra para remover valores nulos antes de mapear
        return response.data.playlists.items
            .filter(playlist => playlist !== null) // Remove elementos nulos
            .map(playlist => ({
                externalUrl: playlist.external_urls.spotify,
                playlist: playlist.name,
                image: playlist.images?.length > 0 ? playlist.images[0].url : "", // Usa optional chaining para evitar erros
            }));

    } catch (error) {
        console.error("Erro ao buscar playlists:", error);
        return [];
    }
};

export const fetchTrackByGenre = async (token, genre, country) => {
    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/search?q=genre:${genre}&type=track&market=${country}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data.tracks.items.map(track => ({
            externalUrl: track.external_urls.spotify,
            artist: track.artists.map(artist => artist.name).join(", "),
            name: track.name,
            image: track.album.images.length > 0 ? track.album.images[0].url : "",
        }))
        
    } catch (error) {
        console.error("Erro ao buscar artistas:", error);
        return [];
    }
}

export const fetchArtistSelected = async (token, artist_id) => {
    try {
        // Primeiro, obtemos as informações do artista
        const artistResponse = await axios.get(
            `https://api.spotify.com/v1/artists/${artist_id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const artistData = artistResponse.data;

        // Em seguida, obtemos as músicas populares do artista
        const tracksResponse = await axios.get(
            `https://api.spotify.com/v1/artists/${artist_id}/top-tracks`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const tracksData = tracksResponse.data.tracks;

        // Preparamos os dados a serem retornados
        return {
            id: artistData.id,
            name: artistData.name,
            image: artistData.images.length > 0 ? artistData.images[0].url : null, // Foto maior disponível
            topTracks: tracksData.map(track => ({
                externalUrl: track.external_urls.spotify,
                name: track.name,
                image: track.album.images.length > 0 ? track.album.images[0].url : null,
            }))
        };
    } catch (error) {
        console.error("Erro ao buscar artista e músicas:", error);
        return [];
    }
};

export const fetchDataArtist = async (token, artist_id) => {
    try {
        // Definindo os headers para a requisição
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        // Fazendo a requisição para obter as informações do artista
        const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artist_id}`, {
            method: 'GET',
            headers: headers
        });

        if (!artistResponse.ok) {
            throw new Error('Erro ao buscar dados do artista');
        }

        const artistData = await artistResponse.json();

        // Fazendo a requisição para obter as principais músicas do artista
        const topTracksResponse = await fetch(`https://api.spotify.com/v1/artists/${artist_id}/top-tracks?market=US`, {
            method: 'GET',
            headers: headers
        });

        if (!topTracksResponse.ok) {
            throw new Error('Erro ao buscar principais músicas');
        }

        const topTracksData = await topTracksResponse.json();

        // Fazendo a requisição para obter os álbuns do artista
        const albumsResponse = await fetch(`https://api.spotify.com/v1/artists/${artist_id}/albums?limit=5`, {
            method: 'GET',
            headers: headers
        });

        if (!albumsResponse.ok) {
            throw new Error('Erro ao buscar álbuns');
        }

        const albumsData = await albumsResponse.json();

        // Retornando os dados necessários
        return {
            name: artistData.name,
            image: artistData.images[0]?.url,  // Pegando a primeira imagem disponível
            externalUrl: artistData.external_urls?.spotify,  // URL externa do artista
            topTracks: topTracksData.tracks.map(track => ({
                name: track.name, 
                externalUrl: track.external_urls?.spotify,  // URL externa da música
                image: track.album.images[0]?.url  // Imagem do álbum da música
            })),
            albums: albumsData.items.map(album => ({
                name: album.name,
                externalUrl: album.external_urls?.spotify,  // URL externa do álbum
                image: album.images[0]?.url  // Imagem do álbum
            }))
        };
    } catch (error) {
        console.error("Erro ao buscar dados do artista:", error);
        return [];
    } 
};
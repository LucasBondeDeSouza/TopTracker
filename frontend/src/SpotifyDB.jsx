import axios from "axios";

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
            name: artist.name,
            image: artist.images.length > 0 ? artist.images[1].url : "", // Pega a imagem média (ou vazio se não houver)
        }));
    } catch (error) {
        console.error("Erro ao buscar artistas:", error);
        return [];
    }
};

export const fetchTopHitsByArtists = async (token, artist_id) => {
    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/artists/${artist_id}/top-tracks`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        )

        return response.data.tracks.map(track => ({
            id: track.id,
            name: track.name,
            image: track.album.images.length > 0 ? track.album.images[1].url : ""
        }))

    } catch (error) {
        console.error("Erro ao buscar Top Hits:", error);
        return [];
    }
}

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
                id: playlist.id || "ID não disponível",
                name: playlist.name || "Nome não disponível",
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
            id: track.id,
            name: track.name,
            artists: track.artists.map(artist => artist.name).join(", "),
            image: track.album.images.length > 0 ? track.album.images[1].url : "",
        }))
        
    } catch (error) {
        console.error("Erro ao buscar artistas:", error);
        return [];
    }
}
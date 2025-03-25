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

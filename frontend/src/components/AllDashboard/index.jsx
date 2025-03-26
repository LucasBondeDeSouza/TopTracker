import React from "react";

import { fetchArtistsByGenre, fetchPlaylistsByCountry } from "../../SpotifyDB";
import CategoryDashboard from "../CategoryDashboard";

export default ({ token }) => {

    return (
        <>
            <CategoryDashboard title={'Top Pop'} request={fetchArtistsByGenre(token, 'pop', 'US')} />
            <CategoryDashboard title={'Playlists do Brasil'} request={fetchPlaylistsByCountry(token, 'BR')} />
            <CategoryDashboard title={'Top Sertanejo'} request={fetchArtistsByGenre(token, 'sertanejo', 'BR')} />
            <CategoryDashboard title={'Playlists dos EUA'} request={fetchPlaylistsByCountry(token, 'US')} />
            <CategoryDashboard title={'Top Funk'} request={fetchArtistsByGenre(token, 'funk', 'BR')} />
            <CategoryDashboard title={'Top Rock'} request={fetchArtistsByGenre(token, 'rock', 'BR')} />
        </>
    )
}
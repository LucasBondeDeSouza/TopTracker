import React from "react";

import { fetchTrackByGenre, fetchTopHitsByArtists } from "../../SpotifyDB";
import CategoryDashboard from "../CategoryDashboard";

export default ({ token }) => {

    return (
        <>
            <CategoryDashboard title={'Melhores do Pop'} request={fetchTrackByGenre(token, 'pop', 'US')} />
            <CategoryDashboard title={'Bruno Mars'} request={fetchTopHitsByArtists(token, '0du5cEVh5yTK9QJze8zA0C')} />
            <CategoryDashboard title={'Melhores do Sertanejo'} request={fetchTrackByGenre(token, 'sertanejo', 'BR')} />
            <CategoryDashboard title={'Taylor Swift'} request={fetchTopHitsByArtists(token, '06HL4z0CvFAxyc27GXpf02')} />
            <CategoryDashboard title={'Melhores do Rock'} request={fetchTrackByGenre(token, 'rock', '')} />
            <CategoryDashboard title={'Post Malone'} request={fetchTopHitsByArtists(token, '246dkjvS1zLTtiykXe5h60')} />
        </>
    )
}
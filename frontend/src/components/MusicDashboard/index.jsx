import React, { useEffect, useState } from "react";
import { fetchTrackByGenre } from "../../SpotifyDB";
import CategoryDashboard from "../CategoryDashboard";

export default ({ token }) => {
    const [popTracks, setPopTracks] = useState([]);
    const [sertanejoTracks, setSertanejoTracks] = useState([]);
    const [funkTracks, setFunkTracks] = useState([]);
    const [rockTracks, setRockTracks] = useState([]);
    const [kpopTracks, setKpopTracks] = useState([]);
    const [pagodeTracks, setPagodeTracks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setPopTracks(await fetchTrackByGenre(token, 'pop', 'US'));
            setSertanejoTracks(await fetchTrackByGenre(token, 'sertanejo', 'BR'));
            setFunkTracks(await fetchTrackByGenre(token, 'funk', 'BR'));
            setRockTracks(await fetchTrackByGenre(token, 'rock', 'BR'));
            setKpopTracks(await fetchTrackByGenre(token, 'k-pop', ''));
            setPagodeTracks(await fetchTrackByGenre(token, 'pagode', 'BR'));
        };
        fetchData();
    }, [token]);

    return (
        <>
            <CategoryDashboard title={'Melhores do Pop'} data={popTracks} />
            <CategoryDashboard title={'Melhores do Sertanejo'} data={sertanejoTracks} />
            <CategoryDashboard title={'Melhores do Funk'} data={funkTracks} />
            <CategoryDashboard title={'Melhores do Rock'} data={rockTracks} />
            <CategoryDashboard title={'Melhores do K-Pop'} data={kpopTracks} />
            <CategoryDashboard title={'Melhores do Pagode'} data={pagodeTracks} />
        </>
    );
};

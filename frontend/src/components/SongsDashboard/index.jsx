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
            <CategoryDashboard title={'Top Pop Songs'} data={popTracks} size={'lg'} />
            <CategoryDashboard title={'Top Sertanejo Songs'} data={sertanejoTracks} size={'lg'} />
            <CategoryDashboard title={'Top Funk Songs'} data={funkTracks} size={'lg'} />
            <CategoryDashboard title={'Top Rock Songs'} data={rockTracks} size={'lg'} />
            <CategoryDashboard title={'Top K-Pop Songs'} data={kpopTracks} size={'lg'} />
            <CategoryDashboard title={'Top Pagode Songs'} data={pagodeTracks} size={'lg'} />
        </>
    );
};

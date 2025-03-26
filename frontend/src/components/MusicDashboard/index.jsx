import React, { useEffect, useState } from "react";
import { fetchTrackByGenre, fetchTopHitsByArtists } from "../../SpotifyDB";
import CategoryDashboard from "../CategoryDashboard";

export default ({ token }) => {
    const [popTracks, setPopTracks] = useState([]);
    const [brunoMarsTracks, setBrunoMarsTracks] = useState([]);
    const [sertanejoTracks, setSertanejoTracks] = useState([]);
    const [taylorSwiftTracks, setTaylorSwiftTracks] = useState([]);
    const [rockTracks, setRockTracks] = useState([]);
    const [postMaloneTracks, setPostMaloneTracks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setPopTracks(await fetchTrackByGenre(token, 'pop', 'US'));
            setBrunoMarsTracks(await fetchTopHitsByArtists(token, '0du5cEVh5yTK9QJze8zA0C'));
            setSertanejoTracks(await fetchTrackByGenre(token, 'sertanejo', 'BR'));
            setTaylorSwiftTracks(await fetchTopHitsByArtists(token, '06HL4z0CvFAxyc27GXpf02'));
            setRockTracks(await fetchTrackByGenre(token, 'rock', 'BR'));
            setPostMaloneTracks(await fetchTopHitsByArtists(token, '246dkjvS1zLTtiykXe5h60'));
        };
        fetchData();
    }, [token]);

    return (
        <>
            <CategoryDashboard title={'Melhores do Pop'} data={popTracks} />
            <CategoryDashboard title={'Bruno Mars'} data={brunoMarsTracks} />
            <CategoryDashboard title={'Melhores do Sertanejo'} data={sertanejoTracks} />
            <CategoryDashboard title={'Taylor Swift'} data={taylorSwiftTracks} />
            <CategoryDashboard title={'Melhores do Rock'} data={rockTracks} />
            <CategoryDashboard title={'Post Malone'} data={postMaloneTracks} />
        </>
    );
};

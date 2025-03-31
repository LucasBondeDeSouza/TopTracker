import React, { useEffect, useState } from "react";
import { fetchArtistsByGenre } from "../../SpotifyDB";
import CategoryDashboard from "../CategoryDashboard";

export default ({ token, setSelectArtist }) => {
    const [artistsPop, setArtistsPop] = useState([]);
    const [artistsSertanejo, setArtistsSertanejo] = useState([]);
    const [artistsFunk, setArtistsFunk] = useState([]);
    const [artistsRock, setArtistsRock] = useState([]);
    const [artistsKPop, setArtistsKPop] = useState([]);
    const [artistsPagode, setArtistsPagode] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setArtistsPop(await fetchArtistsByGenre(token, 'pop', 'US'));
            setArtistsSertanejo(await fetchArtistsByGenre(token, 'sertanejo', 'BR'));
            setArtistsFunk(await fetchArtistsByGenre(token, 'funk', 'BR'));
            setArtistsRock(await fetchArtistsByGenre(token, 'rock', 'BR'));
            setArtistsKPop(await fetchArtistsByGenre(token, 'k-pop', ''));
            setArtistsPagode(await fetchArtistsByGenre(token, 'pagode', 'BR'));
        };
        fetchData();
    }, [token]);

    return (
        <>
            <CategoryDashboard title={'Top Pop Artists'} data={artistsPop} setSelectArtist={setSelectArtist} size={'lg'} />
            <CategoryDashboard title={'Top Sertanejo Artists'} data={artistsSertanejo} setSelectArtist={setSelectArtist} size={'lg'} />
            <CategoryDashboard title={'Top Funk Artists'} data={artistsFunk} setSelectArtist={setSelectArtist} size={'lg'} />
            <CategoryDashboard title={'Top Rock Artists'} data={artistsRock} setSelectArtist={setSelectArtist} size={'lg'} />
            <CategoryDashboard title={'Top K-Pop Artists'} data={artistsKPop} setSelectArtist={setSelectArtist} size={'lg'} />
            <CategoryDashboard title={'Top Pagode Artists'} data={artistsPagode} setSelectArtist={setSelectArtist} size={'lg'} />
        </>
    );
};
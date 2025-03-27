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
            <CategoryDashboard title={'Top Pop'} data={artistsPop} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Top Sertanejo'} data={artistsSertanejo} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Top Funk'} data={artistsFunk} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Top Rock'} data={artistsRock} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Top K-Pop'} data={artistsKPop} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Top Pagode'} data={artistsPagode} setSelectArtist={setSelectArtist} />
        </>
    );
};
import React, { useEffect, useState } from "react";
import { fetchArtistsByGenre, fetchPlaylistsByCountry } from "../../SpotifyDB";
import CategoryDashboard from "../CategoryDashboard";

export default ({ token, setSelectArtist }) => {
    const [artistsPop, setArtistsPop] = useState([]);
    const [playlistsBR, setPlaylistsBR] = useState([]);
    const [artistsSertanejo, setArtistsSertanejo] = useState([]);
    const [playlistsUS, setPlaylistsUS] = useState([]);
    const [artistsFunk, setArtistsFunk] = useState([]);
    const [artistsRock, setArtistsRock] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setArtistsPop(await fetchArtistsByGenre(token, 'pop', 'US'));
            setPlaylistsBR(await fetchPlaylistsByCountry(token, 'BR'));
            setArtistsSertanejo(await fetchArtistsByGenre(token, 'sertanejo', 'BR'));
            setPlaylistsUS(await fetchPlaylistsByCountry(token, 'US'));
            setArtistsFunk(await fetchArtistsByGenre(token, 'funk', 'BR'));
            setArtistsRock(await fetchArtistsByGenre(token, 'rock', 'BR'));
        };
        fetchData();
    }, [token]);

    return (
        <>
            <CategoryDashboard title={'Top Pop'} data={artistsPop} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Playlists do Brasil'} data={playlistsBR} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Top Sertanejo'} data={artistsSertanejo} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Playlists dos EUA'} data={playlistsUS} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Top Funk'} data={artistsFunk} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Top Rock'} data={artistsRock} setSelectArtist={setSelectArtist} />
        </>
    );
};
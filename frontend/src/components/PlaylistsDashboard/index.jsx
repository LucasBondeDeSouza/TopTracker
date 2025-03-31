import React, { useEffect, useState } from "react";
import { fetchPlaylistsByCountry } from "../../SpotifyDB";
import CategoryDashboard from "../CategoryDashboard";

export default ({ token, setSelectArtist }) => {
    const [playlistsBR, setPlaylistsBR] = useState([]);
    const [playlistsUS, setPlaylistsUS] = useState([]);
    const [playlistsJP, setPlaylistsJP] = useState([]);
    const [playlistsGB, setPlaylistsGB] = useState([]);
    const [playlistsDE, setPlaylistsDE] = useState([]);
    const [playlistsKR, setPlaylistsKR] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setPlaylistsBR(await fetchPlaylistsByCountry(token, 'BR'));
            setPlaylistsUS(await fetchPlaylistsByCountry(token, 'US'));
            setPlaylistsJP(await fetchPlaylistsByCountry(token, 'JP'));
            setPlaylistsGB(await fetchPlaylistsByCountry(token, 'GB'));
            setPlaylistsDE(await fetchPlaylistsByCountry(token, 'DE'));
            setPlaylistsKR(await fetchPlaylistsByCountry(token, 'KR'));
        };
        fetchData();
    }, [token]);

    return (
        <>
            <CategoryDashboard title={'Top Playlists in Brazil'} data={playlistsBR} setSelectArtist={setSelectArtist}size={'lg'} />
            <CategoryDashboard title={'Top Playlists in USA'} data={playlistsUS} setSelectArtist={setSelectArtist} size={'lg'} />
            <CategoryDashboard title={'Top Playlists in Japan'} data={playlistsJP} setSelectArtist={setSelectArtist} size={'lg'} />
            <CategoryDashboard title={'Top Playlists in UK'} data={playlistsGB} setSelectArtist={setSelectArtist} size={'lg'} />
            <CategoryDashboard title={'Top Playlists in Germany'} data={playlistsDE} setSelectArtist={setSelectArtist} size={'lg'} />
            <CategoryDashboard title={'Top Playlists in South Korea'} data={playlistsKR} setSelectArtist={setSelectArtist} size={'lg'} />
        </>
    );
};
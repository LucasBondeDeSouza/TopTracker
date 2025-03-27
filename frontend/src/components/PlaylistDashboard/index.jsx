import React, { useEffect, useState } from "react";
import { fetchPlaylistsByCountry } from "../../SpotifyDB";
import CategoryDashboard from "../CategoryDashboard";

export default ({ token, setSelectArtist }) => {
    const [playlistsBR, setPlaylistsBR] = useState([]);
    const [playlistsUS, setPlaylistsUS] = useState([]);
    const [playlistsES, setPlaylistsES] = useState([]);
    const [playlistsGB, setPlaylistsGB] = useState([]);
    const [playlistsJP, setPlaylistsJP] = useState([]);
    const [playlistsKR, setPlaylistsKR] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setPlaylistsBR(await fetchPlaylistsByCountry(token, 'BR'));
            setPlaylistsUS(await fetchPlaylistsByCountry(token, 'US'));
            setPlaylistsES(await fetchPlaylistsByCountry(token, 'ES'));
            setPlaylistsGB(await fetchPlaylistsByCountry(token, 'GB'));
            setPlaylistsJP(await fetchPlaylistsByCountry(token, 'JP'));
            setPlaylistsKR(await fetchPlaylistsByCountry(token, 'KR'));
        };
        fetchData();
    }, [token]);

    return (
        <>
            <CategoryDashboard title={'Playlists do Brasil'} data={playlistsBR} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Playlists dos EUA'} data={playlistsUS} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Playlists da Espanha'} data={playlistsES} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Playlists do Reino Unido'} data={playlistsGB} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Playlists do Japão'} data={playlistsJP} setSelectArtist={setSelectArtist} />
            <CategoryDashboard title={'Playlists da Coreia do Sul'} data={playlistsKR} setSelectArtist={setSelectArtist} />
        </>
    );
};
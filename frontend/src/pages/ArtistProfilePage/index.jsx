import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataArtist } from "../../SpotifyDB";
import ArtistProfileCard from "../../components/ArtistProfileCard";
import ArtistDiscography from "../../components/ArtistDiscography";

export default ({ token }) => {
    const { artist_id } = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const artist = await fetchDataArtist(token, artist_id);
            setData(artist)
        }

        fetchData()
    }, [artist_id, token])

    console.log(data)

    return (
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-6 space-y-2 md:space-x-2">
            <div className="col-span-6 md:col-span-4">
                <ArtistProfileCard image={data.image} name={data.name} externalUrl={data.externalUrl} />
            </div>

            <div className="col-span-6 md:col-span-2">
                <ArtistDiscography musics={data.topTracks} albums={data.albums}  />
            </div>
        </div>
    )
}
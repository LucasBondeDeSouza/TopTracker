import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataArtist } from "../../SpotifyDB";
import ArtistProfileCard from "../../components/ArtistProfileCard";
import ArtistDiscography from "../../components/ArtistDiscography";

export default ({ token }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { artist_id } = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const artist = await fetchDataArtist(token, artist_id);
            setIsLoading(false)
            setData(artist)
        }

        fetchData()
    }, [artist_id, token])

    return (
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-6 space-y-2 md:space-x-2">
            <div className="col-span-6 md:col-span-4">
                <ArtistProfileCard image={data.image} name={data.name} externalUrl={data.externalUrl} />
            </div>

            <div className="col-span-6 md:col-span-2">
                <ArtistDiscography isLoading={isLoading} songs={data.topTracks} albums={data.albums}  />
            </div>
        </div>
    )
}
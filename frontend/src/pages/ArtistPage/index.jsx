import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDataArtist } from "../../SpotifyDB";
import ScrollButton from "../../components/ScrollButton";
import ProfileArtist from "../../components/ProfileArtist";
import DetailsArtist from "../../components/DetailsArtist";

export default ({ token }) => {
    const { artist_id } = useParams();
    const [data, setData] = useState({})
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
        if (scrollRef.current) {
            setHasScrolled(scrollRef.current.scrollLeft > 0);
        }
    };

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
                <ProfileArtist image={data.image} name={data.name} externalUrl={data.externalUrl} />
            </div>

            <div className="col-span-6 md:col-span-2">
                <DetailsArtist musics={data.topTracks} albums={data.albums}  />
            </div>
        </div>
    )
}
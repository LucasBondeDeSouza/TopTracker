import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchArtistSelected } from "../../SpotifyDB";
import ScrollButton from "../ScrollButton";

export default ({ token, selectArtist }) => {
    const [data, setData] = useState({});
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
            const artist = await fetchArtistSelected(token, selectArtist);
            setData(artist);
        };

        fetchData();
    }, [selectArtist]);

    return (
        <div className="sticky top-2">
            <div
                className="h-100 w-full rounded-lg bg-cover relative"
                style={{ backgroundImage: `url(${data.image})` }}
            >
                <div className="w-full h-full rounded-t-lg gradient bg-gradient-to-b to-[#111] from-transparent">
                    <div className="w-full h-full rounded-t-lg gradient bg-gradient-to-l to-[#111] from-transparent">
                        <Link to={`/artist/${data.id}`}>
                            <p className="absolute bottom-0 left-5 text-white font-bold text-2xl hover:underline cursor-pointer">
                                {data.name}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Seção de rolagem com o ScrollButton */}
            <div 
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Container de scroll */}
                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className={`flex items-center content-center overflow-x-auto scrollbar-hidden rounded-b-lg gradient bg-gradient-to-t to-[#111] from-neutral-900 ${data && !hasScrolled ? "pl-3" : ""}`}
                >
                    <div className="flex">
                        {data.topTracks && data.topTracks.map((track, index) => (
                            <Link key={index} to={track.externalUrl} target="_blank" className="flex flex-col p-2 rounded-lg hover:bg-neutral-800 transition duration-200 cursor-pointer">
                                <div className="size-25 bg-cover rounded-lg" style={{ backgroundImage: `url(${track.imageUrl})` }}></div>
                                
                                <p className="text-white text-sm mt-2">
                                    {track.name.length > 10 ? track.name.slice(0, 10) + '...' : track.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Usando ScrollButton para rolagem */}
                <ScrollButton scrollRef={scrollRef} isHovered={isHovered} />
            </div>
        </div>
    );
};
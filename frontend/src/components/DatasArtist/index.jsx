import React, { useState, useEffect, useRef } from "react";
import { fetchArtistSelected } from "../../SpotifyDB";

import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

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

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
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
                        <p className="absolute bottom-5 left-5 text-white font-bold text-2xl">
                            {data.name}
                        </p>
                    </div>
                </div>
            </div>

            <div 
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <button
                    onClick={scrollLeft}
                    className={`absolute left-5 top-1/2 cursor-pointer transform bg-neutral-800 hover:bg-neutral-700 size-8 rounded-full text-white transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                    <ChevronLeft fontSize="medium" className="text-white" />
                </button>

                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className={`flex items-center content-center overflow-x-auto scrollbar-hidden h-40 rounded-b-lg gradient bg-gradient-to-t to-[#111] from-neutral-900 ${data && !hasScrolled ? "pl-3" : ""}`}
                >
                    <div className="flex">
                        {data.topTracks && data.topTracks.map((track) => (
                            <div className="flex flex-col p-2 rounded-lg hover:bg-neutral-800 cursor-pointer">
                                <div className="size-25 bg-cover rounded-lg" style={{ backgroundImage: `url(${track.imageUrl})` }}></div>
                                <p className="text-white text-sm">
                                    {track.name.length > 10 ? track.name.slice(0, 10) + '...' : track.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={scrollRight}
                    className={`absolute right-5 top-1/2 cursor-pointer transform bg-neutral-800 hover:bg-neutral-700 size-8 rounded-full text-white transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                    <ChevronRight fontSize="medium" className="text-white" />
                </button>
            </div>
        </div>
    );
};
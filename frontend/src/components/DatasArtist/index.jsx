import React, { useState, useEffect } from "react";
import { fetchArtistSelected } from "../../SpotifyDB";

export default ({ token, selectArtist }) => {
    const [data, setData] = useState({});

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

            <div className="flex items-center content-center overflow-x-auto scrollbar-hidden h-40 rounded-b-lg gradient bg-gradient-to-t to-[#111] from-neutral-900">
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
        </div>
    );
};
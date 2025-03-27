import React, { useState, useEffect } from "react";

import { fetchArtistSelected } from "../../SpotifyDB";

export default ({ token, selectArtist }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const artist = await fetchArtistSelected(token, selectArtist);
            setData(artist);
        };

        fetchData();
    }, [selectArtist]);

    return (
        <div className="sticky top-2">
            {data && (
                <>
                    <div
                        className="h-100 w-full rounded-lg bg-cover relative"
                        style={{ backgroundImage: `url(${data.image})`}}
                    >
                        <div className="w-full h-full rounded-lg gradient bg-gradient-to-b to-[#111] from-transparent">
                            <div className="w-full h-full rounded-lg gradient bg-gradient-to-l to-[#111] from-transparent">
                                <p className="absolute bottom-10 left-10 text-white font-bold text-2xl">
                                    {data.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
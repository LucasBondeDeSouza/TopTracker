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
        <div className="bg-neutral-900 rounded-lg sticky top-2">
            {data && (
                <div className="relative">
                    <img
                        src={data.image}
                        alt={data.name}
                        className="h-100 w-full rounded-lg object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-tr from-black/50 to-transparent">
                        <p className="text-white text-xl font-bold absolute bottom-5 left-5">
                            {data.name}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
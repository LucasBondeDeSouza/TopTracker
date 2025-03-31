import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchArtistSelected } from "../../SpotifyDB";
import CategoryDashboard from "../CategoryDashboard";

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
                        <Link to={`/artist/${data.id}`}>
                            <p className="absolute bottom-0 left-5 text-white font-bold text-2xl hover:underline cursor-pointer">
                                {data.name}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="pb-3 rounded-b-lg gradient bg-gradient-to-t to-[#111] from-neutral-900">
                <CategoryDashboard title={''} data={data.topTracks} size={'sm'} />
            </div>
        </div>
    );
};
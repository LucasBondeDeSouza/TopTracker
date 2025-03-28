import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataArtist } from "../../SpotifyDB";

export default ({ token }) => {
    const { artist_id } = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        fetchDataArtist(artist_id, token)
    }, [artist_id])

    return (
        <div className="max-w-6xl mx-auto px-2">
            <div className="w-full h-140 rounded-lg bg-neutral-900">
                <div className="bg-red-700 w-full h-3/6 rounded-t-lg relative">
                    <div className="w-full h-full rounded-t-lg gradient bg-gradient-to-b to-[#111] from-transparent">
                        <div className="w-full h-full rounded-t-lg gradient bg-gradient-to-l to-[#111] from-transparent">
                            <p className="absolute bottom-0 left-5 text-white font-bold text-4xl hover:underline cursor-pointer">
                                Artísta
                            </p>
                        </div>

                        <div className="gradient bg-gradient-to-t to-[#111] from-neutral-900 h-full">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
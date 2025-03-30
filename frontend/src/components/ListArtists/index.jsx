import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSearchArtists } from "../../SpotifyDB";

export default ({ token, search }) => {
    const [artists, setArtists] = useState([]);
    const [filteredArtists, setFilteredArtists] = useState([]);

    useEffect(() => {
        fetchSearchArtists(token, search).then((data) => {
            setArtists(data);
            setFilteredArtists(data); // Inicialmente, todos os artistas são exibidos
        });
    }, [search]);

    useEffect(() => {
        // Filtra os artistas conforme o texto de busca
        setFilteredArtists(
            artists.filter((artist) =>
                artist.artist.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, artists]);

    return (
        <div className="absolute top-full left-0 w-full max-h-100 bg-neutral-800 z-10 mt-1 rounded-md shadow-lg scrollbar overflow-auto">
            {filteredArtists.map((artist, index) => (
                <Link key={index} to={`/artist/${artist.id}`}>
                    <div className="p-2 text-white hover:bg-neutral-700 cursor-pointer">
                        <div className="flex items-center gap-3 ml-2">
                            <img
                                className="size-12 bg-white rounded-full"
                                src={artist.image}
                                alt={artist.artist}
                            />
                            <p className="font-medium">{artist.artist}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

import React, { useRef, useState, useEffect } from "react";
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

export default ({ title, request }) => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await request;
            setData(result);
        };

        fetchData();
    }, [request])

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

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1 className="px-10 pt-5 text-white font-bold text-2xl">{title}</h1>

            {/* Botão de scroll esquerdo */}
            <button
                onClick={scrollLeft}
                className={`absolute left-5 top-1/2 cursor-pointer transform bg-neutral-800 hover:bg-neutral-700 size-8 rounded-full text-white transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                    }`}
            >
                <ChevronLeft fontSize="medium" className="text-white" />
            </button>

            {/* Container de scroll */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex mt-2 overflow-x-auto scrollbar-hidden"
            >
                {data.map((artist, index) => (
                    <div
                        key={artist.id}
                        className={`flex flex-col p-3 hover:bg-neutral-800 rounded-lg transition duration-200 cursor-pointer ${index === 0 && !hasScrolled ? "ml-7" : ""
                            }`}
                    >
                        <img
                            src={artist.image}
                            alt={artist.name}
                            className="size-39 bg-black object-cover rounded-lg"
                        />
                        <div className="mt-3 w-35">
                            {artist.artists && (
                                <p className="text-neutral-400 font-semibold">
                                    {artist.artists.length > 15 ? artist.artists.slice(0, 15) + '...' : artist.artists}
                                </p>
                            )}
                            <p className="text-neutral-400 text-sm font-semibold">
                                {artist.name.length > 30 ? artist.name.slice(0, 30) + '...' : artist.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão de scroll direito */}
            <button
                onClick={scrollRight}
                className={`absolute right-5 top-1/2 cursor-pointer transform bg-neutral-800 hover:bg-neutral-700 size-8 rounded-full text-white transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                    }`}
            >
                <ChevronRight fontSize="medium" className="text-white" />
            </button>
        </div>
    );
};
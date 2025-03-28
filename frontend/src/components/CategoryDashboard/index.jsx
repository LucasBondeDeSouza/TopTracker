import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ScrollButton from "../ScrollButton";

export default ({ title, data, setSelectArtist }) => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
        if (scrollRef.current) {
            setHasScrolled(scrollRef.current.scrollLeft > 0);
        }
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1 className="px-10 pt-5 text-white font-bold text-2xl">{title}</h1>

            {/* Container de scroll */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex mt-2 overflow-x-auto scrollbar-hidden"
            >
                {data.map((item, index) => (
                    <Link
                        key={index}
                        to={item.id ? `/artist/${item.id}` : item.externalUrl}
                        target={item.externalUrl ? "_blank" : undefined}
                        onMouseEnter={item.id ? () => setSelectArtist(item.id) : undefined}
                        className={`flex flex-col p-3 hover:bg-neutral-800 rounded-lg transition duration-200 cursor-pointer ${index === 0 && !hasScrolled ? "ml-7" : ""
                            }`}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="size-39 bg-black object-cover rounded-lg"
                        />
                        <div className="mt-3 w-35">
                            {item.artist && (
                                <p className="text-neutral-50 text-sm font-semibold">
                                    {item.artist.length > 18 ? item.artist.slice(0, 18) + '...' : item.artist}
                                </p>
                            )}

                            {item.name && (
                                <p className="text-neutral-400 text-sm font-semibold">
                                    {item.name.length > 25 ? item.name.slice(0, 25) + '...' : item.name}
                                </p>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Botões de Scroll utilizando o componente ScrollButton */}
            <ScrollButton scrollRef={scrollRef} isHovered={isHovered} />
        </div>
    );
};
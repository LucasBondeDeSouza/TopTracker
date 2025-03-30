import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ScrollButton from "../ScrollButton";

export default ({ title, data = [], setSelectArtist = () => {}, size }) => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
        if (scrollRef.current) {
            setHasScrolled(scrollRef.current.scrollLeft > 0);
        }
    };

    const cardSize = {
        sm: { imgSize: "size-25", marginScroll: "ml-3" },
        md: { imgSize: "size-30", marginScroll: "ml-3" },
        lg: { imgSize: "size-40", marginScroll: "ml-7" }, // Sem limite de texto
    };

    const { imgSize, marginScroll } = cardSize[size] || cardSize.md;

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Título da categoria */}
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
                        to={item.id ? `/artist/${item.id}` : item.externalUrl || "#"}
                        target={item.externalUrl ? "_blank" : undefined}
                        onMouseEnter={item.id ? () => setSelectArtist(item.id) : undefined}
                        className={`flex flex-col p-2 hover:bg-neutral-800 rounded-lg transition duration-200 cursor-pointer ${index === 0 && !hasScrolled ? marginScroll : ""
                            }`}
                    >
                        <div className={`${imgSize} bg-cover rounded-lg`} style={{ backgroundImage: `url(${item.image})`}}></div>

                        
                            {item.artist && (
                                <p className="text-neutral-50 text-sm font-semibold mt-2">
                                    {item.artist.length > 18 ? item.artist.slice(0, 18) + "..." : item.artist}
                                </p>
                            )}
                            {item.name && (
                                <p className="text-neutral-400 text-sm font-semibold mt-2">
                                    {item.name.length > 18 ? item.name.slice(0, 18) + "..." : item.name}
                                </p>
                            )}
                            {item.playlist && (
                                <p className="text-white text-sm font-semibold mt-2">
                                    {item.playlist.length > 30 ? item.playlist.slice(0, 30) + "..." : item.playlist}
                                </p>
                            )}
                    </Link>
                ))}
            </div>

            {/* Botões de Scroll utilizando o componente ScrollButton */}
            <ScrollButton scrollRef={scrollRef} isHovered={isHovered} />
        </div>
    );
}
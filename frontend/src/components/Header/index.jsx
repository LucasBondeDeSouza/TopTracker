import React, { useState, useRef, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListArtists from "../ListArtists";

export default ({ selectedHome, handleSelectHome, token }) => {
    const [showList, setShowList] = useState(false);
    const [search, setSearch] = useState('');

    const containerRef = useRef(null); // Ref para o container do input e da lista

    const handleShowList = (search) => {
        setShowList(search.length > 0);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        handleShowList(value); // Chama a função para verificar se deve mostrar a lista
    };

    // Fecha a lista ao clicar em um artista
    const handleSelectArtist = () => {
        setShowList(false);
    };

    // Função para detectar clique fora do container
    const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setShowList(false); // Fecha a lista se o clique for fora do container
        }
    };

    // Adiciona o ouvinte de evento quando o componente for montado
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center p-2 space-x-2 max-w-6xl mx-auto">
            <a 
                href="/"
                className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 size-12 rounded-full cursor-pointer transition duration-500" 
                onClick={handleSelectHome}
            >
                {selectedHome ? (
                    <HomeIcon fontSize="large" className="text-white" />
                ) : (
                    <HomeOutlinedIcon fontSize="large" className="text-white" />
                )}
            </a>

            {/* Container do input + lista */}
            <div className="relative flex-grow min-w-0 max-w-xl md:w-2/4" ref={containerRef}>
                {/* Container do input para manter a lupa fixa */}
                <div className="relative">
                    <input 
                        className="bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700 text-white rounded-full py-2 pl-12 text-lg w-full border-2 border-transparent focus:border-white outline-none transition duration-300" 
                        type="text"
                        placeholder="Pesquise um artista"
                        onChange={handleSearchChange} 
                    />
                    <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                </div>

                {/* Renderiza a lista abaixo do input */}
                {showList && <ListArtists token={token} search={search} onSelectArtist={handleSelectArtist} />}
            </div>
        </div>
    );
};
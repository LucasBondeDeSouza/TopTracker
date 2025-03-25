import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default () => {
    const [selected, setSelected] = useState(true);

    const handleSelect = () => {
        setSelected(!selected);
    };

    return (
        <div className="flex items-center p-2 space-x-2 max-w-6xl mx-auto">
            <div 
                className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 size-12 rounded-full cursor-pointer transition duration-500" 
                onClick={handleSelect}
            >
                {selected ? (
                    <HomeIcon fontSize="large" className="text-white" />
                ) : (
                    <HomeOutlinedIcon fontSize="large" className="text-white" />
                )}
            </div>

            <div className="relative flex-grow min-w-0 max-w-xl md:w-2/4">
                <input 
                    className="bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700 text-white rounded-full py-2 pl-12 text-lg w-full border-2 border-transparent focus:border-white outline-none transition duration-300" 
                    type="text"
                    placeholder="Pesquise um artista"
                />
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            </div>
        </div>
    );
};
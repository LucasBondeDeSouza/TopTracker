import React, { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default () => {
    const [selected, setSelected] = useState(true)

    const handleSelect = () => {
        setSelected(!selected)
    }

    return (
        <div className="flex items-center p-2 space-x-2">
            <div className="bg-neutral-800 hover:bg-neutral-600 p-2 rounded-full cursor-pointer transition duration-500" onClick={() => handleSelect()}>
                {selected ? (
                    <HomeIcon fontSize="large" className="text-white" />
                ) : (
                    <HomeOutlinedIcon fontSize="large" className="text-white" />
                )}
            </div>

            <input 
                className="bg-neutral-800 text-white rounded-full py-2 px-12 text-lg w-2/3 md:w-1/3 border-2 border-transparent focus:border-white outline-none transition duration-300" 
                type="text"
                placeholder="Pesquise um artista"
            />

            <SearchIcon className="absolute left-20 text-neutral-400" />
        </div>
    )
}
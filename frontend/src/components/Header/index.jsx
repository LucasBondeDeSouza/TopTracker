import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

export default () => {

    return (
        <div className="flex items-center p-2 space-x-2">
            <div className="bg-neutral-800 p-3 rounded-full cursor-pointer">
                <FontAwesomeIcon icon={faHome} className="text-white text-xl" />
            </div>

            <input 
                className="bg-neutral-800 text-white rounded-full py-2 px-12 text-lg w-2/3 md:w-1/3 border-2 border-transparent focus:border-white outline-none transition duration-300" 
                type="text"
                placeholder="Pesquise um artista"
            />

            <FontAwesomeIcon icon={faSearch} className="absolute left-19 top-5 text-neutral-500 text-2xl" />
        </div>
    )
}
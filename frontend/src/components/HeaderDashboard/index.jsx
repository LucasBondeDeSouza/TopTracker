import React from "react";

export default ({ selectCategory, setSelectCategory }) => {

    return (
        <div className="space-x-2 bg-neutral-900 rounded-t-lg py-2 px-10 z-10">
            <button onClick={() => setSelectCategory('artists')} className={`py-2 px-4 text-sm cursor-pointer transition duration-300 rounded-full ${selectCategory == 'artists' ? 'bg-green-500 hover:bg-green-600' : 'bg-neutral-700 hover:bg-neutral-600 text-gray-100 font-bold'}`}>Artists</button>
            <button onClick={() => setSelectCategory('songs')} className={`py-2 px-4 text-sm cursor-pointer transition duration-300 rounded-full ${selectCategory == 'songs' ? 'bg-green-500 hover:bg-green-600' : 'bg-neutral-700 hover:bg-neutral-600 text-gray-100 font-bold'}`}>Songs</button>
            <button onClick={() => setSelectCategory('playlists')} className={`py-2 px-4 text-sm cursor-pointer transition duration-300 rounded-full ${selectCategory == 'playlists' ? 'bg-green-500 hover:bg-green-600' : 'bg-neutral-700 hover:bg-neutral-600 text-gray-100 font-bold'}`}>Playlists</button>
        </div>
    )
}
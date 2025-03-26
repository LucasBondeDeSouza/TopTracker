import React from "react";

export default ({ selectCategory, setSelectCategory }) => {

    return (
        <div className="space-x-2 bg-neutral-900 rounded-t-lg py-2 px-10 z-10">
            <button onClick={() => setSelectCategory('all')} className={`py-2 px-4 text-sm cursor-pointer transition duration-300 rounded-full ${selectCategory == 'all' ? 'bg-white hover:bg-gray-200' : 'bg-neutral-700 hover:bg-neutral-600 text-gray-100 font-bold'}`}>Tudo</button>
            <button onClick={() => setSelectCategory('music')} className={`py-2 px-4 text-sm cursor-pointer transition duration-300 rounded-full ${selectCategory == 'music' ? 'bg-white hover:bg-gray-200' : 'bg-neutral-700 hover:bg-neutral-600 text-gray-100 font-bold'}`}>Músicas</button>
        </div>
    )
}
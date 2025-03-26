import React from "react";

export default ({ select, setSelect }) => {

    return (
        <div className="space-x-2 bg-neutral-900 rounded-t-lg py-2 px-10 z-10">
            <button onClick={() => setSelect('all')} className={`py-2 px-4 text-sm cursor-pointer transition duration-300 rounded-full ${select == 'all' ? 'bg-white hover:bg-gray-200' : 'bg-neutral-700 hover:bg-neutral-600 text-gray-100 font-bold'}`}>Tudo</button>
            <button onClick={() => setSelect('music')} className={`py-2 px-4 text-sm cursor-pointer transition duration-300 rounded-full ${select == 'music' ? 'bg-white hover:bg-gray-200' : 'bg-neutral-700 hover:bg-neutral-600 text-gray-100 font-bold'}`}>Músicas</button>
        </div>
    )
}
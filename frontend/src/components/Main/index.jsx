import React, { useState, useEffect } from "react";

import Dashboard from "../Dashboard";
import DatasArtist from "../DatasArtist";

export default ({ token }) => {
    const [selectArtist, setSelectArtist] = useState();
    
    const artists = [
        '1uNFoZAHBGtllmzznpCI3s',
        '3TVXtAsR1Inumwj472S9r4',
        '06HL4z0CvFAxyc27GXpf02',
        '0du5cEVh5yTK9QJze8zA0C',
        '4PzYKhC14sTJNEr0dzoo0d',
        '246dkjvS1zLTtiykXe5h60',
        '04gDigrS5kc9YWfZHwBETP',
        '3fMbdgg4jU18AjLCKBhRSm',
        '3p7PcrEHaaKLJnPUGOtRlT',
        '6vWDO969PvNqNYHIOW5v0m',
        '2CKOmarVWvWqkNWUatHCex',
        '1on7ZQ2pvgeQF4vmIA09x5',
        '0L8ExT028jH3ddEcZwqJJ5',
        '3Nrfpe0tUJi4K4DXYWgMUX',
        '4gzpq5DPGxSnKTe4SA8HAU'
    ];

    useEffect(() => {
        const randomArtist = artists[Math.floor(Math.random() * artists.length)];
        setSelectArtist(randomArtist);
    }, [token]);

    return (
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-6 md:space-x-2">
            <div className="col-span-6 md:col-span-4">
                <Dashboard token={token} setSelectArtist={setSelectArtist} />
            </div>

            <div className="col-span-2 hidden md:block">
                <DatasArtist token={token} selectArtist={selectArtist} />
            </div>
        </div>
    );
};
import React, { useState } from "react";

import HeaderDashboard from "../HeaderDashboard";
import AllDashboard from "../AllDashboard";
import MusicDashboard from "../MusicDashboard";
import PlaylistDashboard from "../PlaylistDashboard";

export default ({ token, setSelectArtist }) => {
    const [selectCategory, setSelectCategory] = useState('all')

    const handleCategory = (category) => {
        if (category == 'all') {
            return <AllDashboard token={token} setSelectArtist={setSelectArtist} />
        } else if (category == 'music') {
            return <MusicDashboard token={token} setSelectArtist={setSelectArtist} />
        } else if (category == 'playlist') {
            return <PlaylistDashboard token={token} setSelectArtist={setSelectArtist} />
        }
    }

    return (
        <div className="bg-neutral-900 rounded-lg mb-5">
            <HeaderDashboard selectCategory={selectCategory} setSelectCategory={setSelectCategory} />

            {handleCategory(selectCategory)}
        </div>
    );
};

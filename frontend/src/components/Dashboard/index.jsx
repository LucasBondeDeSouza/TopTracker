import React, { useState } from "react";

import HeaderDashboard from "../HeaderDashboard";
import ArtistsDashboard from "../ArtistsDashboard";
import MusicDashboard from "../SongsDashboard";
import PlaylistDashboard from "../PlaylistsDashboard";

export default ({ token, setSelectArtist }) => {
    const [selectCategory, setSelectCategory] = useState('artists')

    const handleCategory = (category) => {
        if (category == 'artists') {
            return <ArtistsDashboard token={token} setSelectArtist={setSelectArtist} />
        } else if (category == 'songs') {
            return <MusicDashboard token={token} setSelectArtist={setSelectArtist} />
        } else if (category == 'playlists') {
            return <PlaylistDashboard token={token} setSelectArtist={setSelectArtist} />
        }
    }

    return (
        <div className="pb-3 bg-neutral-900 rounded-lg mb-5">
            <HeaderDashboard selectCategory={selectCategory} setSelectCategory={setSelectCategory} />

            {handleCategory(selectCategory)}
        </div>
    );
};

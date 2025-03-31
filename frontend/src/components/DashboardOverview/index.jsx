import React, { useState } from "react";

import HeaderDashboard from "../DashboardHeader";
import TrendingArtists from "../TrendingArtists";
import TrendingSongs from "../TrendingSongs";
import TrendingPlaylists from "../TrendingPlaylists";

export default ({ token, setSelectArtist }) => {
    const [selectCategory, setSelectCategory] = useState('artists')

    const handleCategory = (category) => {
        if (category == 'artists') {
            return <TrendingArtists token={token} setSelectArtist={setSelectArtist} />
        } else if (category == 'songs') {
            return <TrendingSongs token={token} setSelectArtist={setSelectArtist} />
        } else if (category == 'playlists') {
            return <TrendingPlaylists token={token} setSelectArtist={setSelectArtist} />
        }
    }

    return (
        <div className="pb-3 bg-neutral-900 rounded-lg mb-5">
            <HeaderDashboard selectCategory={selectCategory} setSelectCategory={setSelectCategory} />

            {handleCategory(selectCategory)}
        </div>
    );
};

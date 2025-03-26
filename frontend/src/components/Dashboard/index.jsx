import React, { useState } from "react";

import HeaderDashboard from "../HeaderDashboard";
import AllDashboard from "../AllDashboard";
import MusicDashboard from "../MusicDashboard";

export default ({ token }) => {
    const [selectCategory, setSelectCategory] = useState('all')

    return (
        <div className="bg-neutral-900 rounded-lg mb-5">
            <HeaderDashboard selectCategory={selectCategory} setSelectCategory={setSelectCategory} />

            {selectCategory == 'all' ? <AllDashboard token={token} /> : <MusicDashboard token={token} />}
        </div>
    );
};

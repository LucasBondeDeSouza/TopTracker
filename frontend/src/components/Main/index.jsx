import React, { useState } from "react";

import Dashboard from "../Dashboard";
import DatasArtist from "../DatasArtist";

export default ({ token }) => {
    const [selectArtist, setSelectArtist] = useState('')

    return (
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-6 md:space-x-2">
            <div className="col-span-6 md:col-span-4">
                <Dashboard token={token} setSelectArtist={setSelectArtist} />
            </div>

            <div className="col-span-2 hidden md:block">
                <DatasArtist token={token} selectArtist={selectArtist} />
            </div>
        </div>
    )
}
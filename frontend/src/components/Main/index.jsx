import React from "react";
import MusicDashboard from "../MusicDashboard";
import DatasArtist from "../DatasArtist";

export default () => {

    return (
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-6 space-x-2">
            <div className="col-span-6 md:col-span-4">
                <MusicDashboard />
            </div>

            <div className="col-span-2 hidden md:block">
                <DatasArtist />
            </div>
        </div>
    )
}
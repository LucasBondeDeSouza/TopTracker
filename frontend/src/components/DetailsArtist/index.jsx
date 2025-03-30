import React from "react";
import CategoryDashboard from "../CategoryDashboard";

export default ({ musics, albums }) => {

    return (
        <div className="rounded-lg w-full min-h-140 bg-neutral-900">
            <CategoryDashboard title={'Músicas'} data={musics} size={'md'} />
            <CategoryDashboard title={'Albums'} data={albums} size={'md'} />
        </div>
    )
}
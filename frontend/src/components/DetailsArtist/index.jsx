import React from "react";
import CategoryDashboard from "../CategoryDashboard";

export default ({ musics, albums }) => {

    return (
        <div className="py-3 rounded-lg w-full bg-neutral-900">
            <CategoryDashboard title={'Músicas'} data={musics} size={'md'} />
            <CategoryDashboard title={'Albums'} data={albums} size={'md'} />
        </div>
    )
}
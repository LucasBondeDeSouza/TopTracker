import React from "react";
import CategorySection from "../CategorySection";

export default ({ musics, albums }) => {

    return (
        <div className="py-3 rounded-lg w-full bg-neutral-900 mb-5">
            <CategorySection title={'Músicas'} data={musics} size={'md'} />
            <CategorySection title={'Albums'} data={albums} size={'md'} />
        </div>
    )
}
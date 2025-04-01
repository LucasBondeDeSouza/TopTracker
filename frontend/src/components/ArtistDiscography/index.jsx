import React from "react";
import CategorySection from "../CategorySection";
import SkeletonCategorySection from "../SkeletonCategorySection";

export default ({ isLoading, songs, albums }) => {

    return (
        <div className="py-3 rounded-lg w-full bg-neutral-900 mb-5">
            {isLoading ? <SkeletonCategorySection size={'md'} /> : <CategorySection title={'Songs'} data={songs} size={'md'} />}
            {isLoading ? <SkeletonCategorySection size={'md'} /> : <CategorySection title={'Albums'} data={albums} size={'md'} />}
        </div>
    )
}
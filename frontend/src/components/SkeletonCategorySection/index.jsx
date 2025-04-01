import React from "react";

export default ({ size }) => {

    const cardSize = {
        sm: { imgSize: "size-25" },
        md: { imgSize: "size-30" },
        lg: { imgSize: "size-40" },
    };

    const { imgSize } = cardSize[size] || cardSize.md;

    return (
        <div className="pl-10 pt-5 animate-pulse">
            <div className="h-7 w-50 rounded-lg bg-neutral-700"></div>

            <div className="mt-4 flex gap-6 overflow-x-auto scrollbar-hidden">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className={`${imgSize} bg-neutral-700 rounded-lg`}></div>
                        <div className="h-4 w-20 bg-neutral-700 rounded-lg"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
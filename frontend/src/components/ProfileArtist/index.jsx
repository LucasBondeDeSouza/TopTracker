import React from "react";
import { Link } from "react-router-dom";

export default ({ image, name, externalUrl }) => {

    return (
        <div className="rounded-lg w-full h-140">
            <div className="w-full h-full rounded-lg relative bg-cover" style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full rounded-lg gradient bg-gradient-to-b to-[#111] from-transparent">
                    <div className="w-full h-full rounded-lg gradient bg-gradient-to-l to-[#111] from-transparent">
                        <Link to={externalUrl} target="_blank">
                            <p className="absolute bottom-25 left-5 text-white font-bold text-8xl hover:underline cursor-pointer">
                                {name}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
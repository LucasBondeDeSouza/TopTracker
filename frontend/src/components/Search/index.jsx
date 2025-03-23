import React from "react";

export default ({ name, setName }) => {

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}
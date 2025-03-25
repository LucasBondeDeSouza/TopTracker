import React from "react";

import CategoryDashboard from "../CategoryDashboard";

export default ({ token }) => {

    return (
        <div className="bg-neutral-900 rounded-lg mb-5">
            <CategoryDashboard token={token} genre={'sertanejo'} country={'BR'} title={'Top Sertanejo'} />
            <CategoryDashboard token={token} genre={'pop'} country={'US'} title={'Top Pop'} />
            <CategoryDashboard token={token} genre={'rock'} country={''} title={'Top Rock'} />
        </div>
    );
};

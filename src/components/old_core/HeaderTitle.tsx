import React from "react";


function HeaderTitle({ label }: { label: string }) {
    return (
        <div className="w-full flex flex-col gap-4 items-center">
            <h1>{label}</h1>
        </div>
    );
}

export default HeaderTitle;
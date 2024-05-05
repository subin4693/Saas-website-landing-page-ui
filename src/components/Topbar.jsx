import React from "react";
import Arrow from "../../public/Vector(2).png";

const Topbar = () => {
    return (
        <div className="  bg-dark flex justify-center items-center py-3 gap-2">
            <p className=" body-small-tag text-light">
                <span className="text-light-2 hidden  lg:inline">
                    This page is included in a free SaaS Website Kit.
                </span>
                &nbsp;View the component kit
            </p>
            <img src={Arrow} alt="arrow" />
        </div>
    );
};

export default Topbar;

import React from "react";

const Testimonials = ({ text, name, userid, image }) => {
    return (
        <div className="p-8 shadow-xl w-[340px] space-y-4 h-fit rounded-2xl">
            <p>{text}</p>
            <div className="flex   items-center gap-4">
                <img
                    src={image}
                    alt=""
                    className="rounded-full w-15 h-15 object-cover"
                />
                <div>
                    <h5>{name}</h5>
                    <h6>{userid}</h6>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

import React from "react";

const NeedToKnowCard = ({ image, title, text }) => {
    return (
        <div className="shadow-2xl max-w-[450px] p-10 flex justify-center items-center flex-col rounded-2xl">
            <img src={image} alt="" />
            <h5 className="head-text-4 text-center">{title}</h5>

            <p className="text-center body-medium mt-5">{text}</p>
        </div>
    );
};

export default NeedToKnowCard;

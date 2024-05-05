import React from "react";
import Button from "./Button";

const FeaturesGrid = ({ image, heading, text }) => {
    return (
        <div>
            <img src={image} />
            <h5 className="head-text-5">{heading}</h5>
            <p className="body-medium">{text}</p>
            <Button styles="body-medium flex justify-center items-center gap-2">
                Learn more
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>
            </Button>
        </div>
    );
};

export default FeaturesGrid;

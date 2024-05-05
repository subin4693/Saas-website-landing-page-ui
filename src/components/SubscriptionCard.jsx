import React from "react";
import Button from "./Button";
import { cn } from "../lib/utils";

const SubscriptionCard = ({ plane, price, buttonText, features, theme }) => {
    return (
        <div
            className={cn(
                theme == "dark" ? "bg-dark text-light-1" : "bg-light",
                "p-10 rounded-3xl space-y-7 shadow-2xl min-w-[380px]"
            )}
        >
            <div className="flex justify-between  items-center">
                <span
                    className={cn(
                        theme == "dark" ? "text-light-2" : "text-dark",
                        " font-bold"
                    )}
                >
                    {plane}
                </span>
                {theme === "dark" && (
                    <button className="tag border border-dark-1 rounded-md p-1 px-3 tag-gradient">
                        Most Popular
                    </button>
                )}
            </div>
            <div className="">
                <span className="font-bold text-6xl">${price}</span>/monthly
            </div>
            <Button
                type="primary"
                styles={cn(
                    theme == "dark" ? "bg-light text-dark" : "",
                    " w-full"
                )}
            >
                {buttonText}
            </Button>
            {features.map((feature) => (
                <span className="flex">
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
                            d="m4.5 12.75 6 6 9-13.5"
                        />
                    </svg>
                    {feature}
                </span>
            ))}
        </div>
    );
};

export default SubscriptionCard;

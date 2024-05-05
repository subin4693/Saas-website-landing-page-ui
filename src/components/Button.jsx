import React from "react";
import { cn } from "../lib/utils";

const Button = ({ children, type, styles }) => {
    return (
        <button
            className={cn(
                type == "primary"
                    ? "bg-dark text-light"
                    : type == "secondary"
                    ? "border text-dark border-light-2"
                    : "text-dark",
                "p-1 rounded-lg px-2 ",
                styles
            )}
        >
            {children}
        </button>
    );
};

export default Button;

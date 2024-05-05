import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ title, links }) => {
    return (
        <div className="flex flex-col body-s">
            <h5 className="body-s-bold text-light">{title}</h5>
            <ul className="space-y-4 mt-4 text-dark-1">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to="/" key={index}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks;

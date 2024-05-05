import React from "react";

import logo from "../../public/logo1.png";

import insta from "../../public/insta.png";
import x from "../../public/x.png";
import p from "../../public/p.png";
import linkedin from "../../public/linkedin.png";
import tictoc from "../../public/tictock.png";
import youtube from "../../public/youtube.png";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between px-5 py-10 bg-dark text-light-2">
            <div className="flex flex-col justify-between">
                <span>
                    <img src={logo} alt="" />

                    <p className="body-s mt-5">
                        Effortlessly turn your ideas into a <br />
                        fully functional, responsive, no-
                        <br />
                        code SaaS website.
                    </p>
                </span>
                <div className="flex items-center  gap-5 mt-10 md:mt-0">
                    <img src={x} alt="x" />
                    <img src={insta} alt="x" />
                    <img src={p} alt="x" />
                    <img src={linkedin} alt="x" />
                    <img src={tictoc} alt="x" />
                    <img src={youtube} alt="x" />
                </div>
            </div>
            <div className="grid grid-1 md:grid-cols-4 gap-10 mt-20 md:mt-0">
                <FooterLinks
                    title="Product"
                    links={[
                        "Features",
                        "Integrations",
                        "Updates",
                        "FAQ",
                        "Pricing",
                    ]}
                />
                <FooterLinks
                    title="Company"
                    links={[
                        "About",
                        "Blog",
                        "Careers",
                        "Mainfesto",
                        "Press",
                        "Contact",
                    ]}
                />
                <FooterLinks
                    title="Resource"
                    links={["Examples", "Community", "Guides", "Docs"]}
                />
                <FooterLinks
                    title="Legal"
                    links={["Privacy", "Terms", "Security"]}
                />
            </div>
        </div>
    );
};

export default Footer;

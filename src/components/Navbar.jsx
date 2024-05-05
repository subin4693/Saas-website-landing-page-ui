import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import Button from "./Button";
import { cn } from "../lib/utils";

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className="flex justify-between items-center px-5 py-3 bg-light-1">
            <div className="flex justify-center items-center w-fit  body-s">
                <img src={logo1} alt="logo1" className="h-10 object-cover" />{" "}
                <div className="hidden md:flex">
                    {" "}
                    made by &nbsp;
                    <img src={logo2} alt="logo2" className="h-6 object-cover" />
                    &nbsp;
                    <span className="font-bold">Framer</span>
                </div>
            </div>
            <div className="relative">
                <div className="flex justify-center items-center w-fit space-x-7 body-medium text-dark-1 hidden md:flex">
                    <Link className="hover:text-dark duration-100 delay-[10ms] ">
                        About
                    </Link>
                    <Link className="hover:text-dark duration-100 delay-[10ms] ">
                        Features
                    </Link>
                    <Link className="hover:text-dark duration-100 delay-[10ms] ">
                        Customers
                    </Link>
                    <Link className="hover:text-dark duration-100 delay-[10ms] ">
                        Updates
                    </Link>
                    <Link className="hover:text-dark duration-100 delay-[10ms] ">
                        Help
                    </Link>
                    <Button type="primary">Get for free</Button>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setShow((prev) => !prev)}
                >
                    {show ? (
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
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
                <div
                    className={cn(
                        " absolute flex flex-col z-10   w-[90vw] space-y-2 items-center justify-center p-3   bg-primar bg-light-1 rounded-md top-9    body-medium text-dark-1 duration-100 md:hidden ",
                        show ? "right-0" : "right-[-100vw]"
                    )}
                >
                    <Link className="hover:text-dark duration-100 delay-[10ms] hover:bg-light-2 w-full text-center rounded-md p-2 ">
                        About
                    </Link>
                    <Link className="hover:text-dark duration-100 delay-[10ms] hover:bg-light-2 w-full text-center rounded-md p-2 ">
                        Features
                    </Link>
                    <Link className="hover:text-dark duration-100 delay-[10ms] hover:bg-light-2 w-full text-center rounded-md p-2 ">
                        Customers
                    </Link>
                    <Link className="hover:text-dark duration-100 delay-[10ms] hover:bg-light-2 w-full text-center rounded-md p-2 ">
                        Updates
                    </Link>
                    <Link className="hover:text-dark duration-100 delay-[10ms] hover:bg-light-2 w-full text-center rounded-md p-2 ">
                        Help
                    </Link>
                    <Button type="primary" styles="w-full p-2">
                        Get for free
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

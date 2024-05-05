import React from "react";

import { Outlet } from "react-router-dom";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
        <div>
            <header>
                <Topbar />
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;

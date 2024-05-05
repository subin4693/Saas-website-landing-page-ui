import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";

import RootLayout from "./layouts/RootLayout";

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",

            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
            ],
        },
    ]);

    return (
        <div className="font-inter  overflow-x-hidden min-h-screen">
            <RouterProvider router={router} />
        </div>
    );
};

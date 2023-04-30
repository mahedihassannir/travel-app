import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home.";
import Destination from "../Pages/Destination";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";




let router = createBrowserRouter(
    [
        {
            pathL: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },

                {
                    path: "Destination",
                    element: <Destination></Destination>
                },
                {
                    path: "Contact",
                    element: <Contact></Contact>
                },
                {
                    path: "Blog",
                    element: <Blog></Blog>
                },

            ]
        }
    ]
)


export default router
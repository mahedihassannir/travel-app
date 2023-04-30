import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home.";
import Destination from "../Pages/Destination";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Private/PrivateRoute";




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
                    element: <PrivateRoute> <Destination></Destination> </PrivateRoute>
                },
                {
                    path: "Contact",
                    element: <Contact></Contact>
                },
                {
                    path: "Blog",
                    element: <Blog></Blog>
                },
                {
                    path: "Login",
                    element: <Login></Login>
                },
                {
                    path: "Register",
                    element: <Register></Register>
                },

            ]
        }
    ]
)


export default router
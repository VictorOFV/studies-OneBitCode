import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Main from "./layouts/main"
import Videos from "./pages/Videos"
import PageNotFound from "./pages/PageNotFound"
import Products from "./pages/Products"
import Product from "./pages/Product"

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main />,
            errorElement: <PageNotFound />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/videos",
                    element: <Videos />
                },
                {
                    path: "/produtos",
                    element: <Products />
                },
                {
                    path: "/produtos/:productName",
                    element: <Product />
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/registro",
            element: <Register />
        }
    ]
)

export default router
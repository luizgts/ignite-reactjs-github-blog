import {
    RouterProvider,
    createBrowserRouter,
    Navigate
} from "react-router-dom";

import { Layout } from "../pages/layout";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Post = lazy(() => import("../pages/Post"));

const router = createBrowserRouter([{
    element: <Layout />,
    children: [
        { path: "/", element: <Home />},
        { path: "post/:postId", element: <Post />},
        { path: "*", element: <Navigate to="/" />},
    ]
}]);

export function Routes() {
    return (
        <RouterProvider router={router} />
    )
}
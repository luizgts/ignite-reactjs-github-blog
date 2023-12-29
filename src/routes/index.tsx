import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import { Layout } from "../pages/layout";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";
import { PageError } from "../pages/Error";

const router = createBrowserRouter([{
    element: <Layout />,
    errorElement: <PageError />,
    children: [
        { path: "/", element: <Home />},
        { path: "post/:postId", element: <Post />},
    ]
}]);

export function Routes() {
    return (
        <RouterProvider router={router} />
    )
}
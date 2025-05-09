import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
        {
            path: "/",
            Component: Home,
        },
        {
            path: "/category/:id",
            Component: CategoryNews,
        }
    ]
  },
]);

export default router;

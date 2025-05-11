import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";

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
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      }
    ],
  },
  {
    path: "/news-details/:id",
    Component: NewsDetails,
  }
]);

export default router;

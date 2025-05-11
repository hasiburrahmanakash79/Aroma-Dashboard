import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import Dashboard from "../Layouts/Dashboard";
import ProfilePage from "../Pages/Dashboards/Profile/ProfilePage";
import Overview from "../Pages/Dashboards/Overview/Overview";
import Users from "../Pages/Dashboards/Users/Users";
import Oil from "../Pages/Dashboards/Oil/Oil";
import Recipes from "../Pages/Dashboards/Recipes/Recipes";
import Courses from "../Pages/Dashboards/Courses/Courses";
import Categories from "../Pages/Dashboards/Categories/Categories";
import AdvertisingSpace from "../Pages/Dashboards/AdvertisingSpace/AdvertisingSpace";
import Subscription from "../Pages/Dashboards/Subscription/Subscription";
import TransactionHistory from "../Pages/Dashboards/TransactionHistory/TransactionHistory";
import Setting from "../Pages/Dashboards/Setting/Setting";
import NewsFeed from "../Pages/Dashboards/NewsFeed/NewsFeed";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/user",
        element: <Users />,
      },
      {
        path: "/oil",
        element: <Oil />,
      },
      {
        path: "/recipe",
        element: <Recipes />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/advertising",
        element: <AdvertisingSpace />,
      },
      {
        path: "/news",
        element: <NewsFeed />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/history",
        element: <TransactionHistory />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/profile",
        element: <ProfilePage/>,
      },
      
    ],
  },
  {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/otp",
        element: <OtpVerification />,
      },
]);

export default router;

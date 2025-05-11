import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import Dashboard from "../Layouts/Dashboard";
import ProfilePage from "../Pages/Dashboards/Profile/ProfilePage";
import Overview from "../Pages/Dashboards/Overview/Overview";
import Users from "../Pages/Dashboards/Users/Users";
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

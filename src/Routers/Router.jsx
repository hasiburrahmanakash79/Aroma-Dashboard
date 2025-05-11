import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import Dashboard from "../Layouts/Dashboard";
import AdminHome from "../Pages/Dashboards/AdminDashboard/AdminHome";
import UpgradePage from "../Pages/Dashboards/AdminDashboard/UpgradePage";
import ProfilePage from "../Pages/Dashboards/Profile/ProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <AdminHome />,
      },
      {
        path: "/upgrade",
        element: <UpgradePage/>,
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

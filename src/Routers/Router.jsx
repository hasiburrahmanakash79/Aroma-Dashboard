import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import Dashboard from "../Layouts/Dashboard";
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
import AddCourses from "../Pages/Dashboards/Courses/AddCourses";
import UpdatePackageForm from "../Pages/Dashboards/Subscription/UpdatePackageForm";
import AddPackage from "../Pages/Dashboards/Subscription/AddPackage";
import ProfileInfo from "../Pages/Dashboards/Setting/ProfileInfo";
import TermsCondition from "../Pages/Dashboards/Setting/TermsCondition";
import PrivacyPolicy from "../Pages/Dashboards/Setting/PrivacyPolicy";
import AboutUs from "../Pages/Dashboards/Setting/AboutUs";
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
        path: "/courses/add",
        element: <AddCourses />,
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
        path: "/subscription/add",
        element: <AddPackage />,
      },
      {
        path: "/subscription/update/:id",
        element: <UpdatePackageForm />,
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
        path: "/setting/profile",
        element: <ProfileInfo/>,
      },
      {
        path: "/setting/termsCondition",
        element: <TermsCondition/>,
      },
      {
        path: "/setting/privacy",
        element: <PrivacyPolicy/>,
      },
      {
        path: "/setting/aboutUs",
        element: <AboutUs/>,
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

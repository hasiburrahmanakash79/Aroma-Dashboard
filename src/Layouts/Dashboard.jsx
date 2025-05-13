import logo from "../assets/logo/aroma_logo.png";
import { Link, Outlet, useLocation } from "react-router-dom"; // Import useLocation
import { RiUserLine, RiSettings4Line } from "react-icons/ri";
import {
  FaRegChessQueen,
  FaRightFromBracket,
  FaBottleWater,
  FaMoneyCheckDollar,
} from "react-icons/fa6";
import { GiBowlOfRice } from "react-icons/gi";
import { GoMegaphone } from "react-icons/go";
import { SiGooglenews } from "react-icons/si";
import { PiGraduationCapLight } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { IconContext } from "react-icons";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();


  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout!",
      cancelButtonText: "No, Cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User logged out");
      }
    });
  };

  const iconMappings = {
    RoleHome: MdHomeWork,
    User: RiUserLine,
    Oil: FaBottleWater,
    recipe: GiBowlOfRice,
    Course: PiGraduationCapLight,
    Categories: PiGraduationCapLight,
    Advertising: GoMegaphone,
    News: SiGooglenews,
    Dollar: FaMoneyCheckDollar,
    Settings: RiSettings4Line,
    Upgrade: FaRegChessQueen,
  };

  const Menus = [
    {
      title: "Dashboard",
      path: "/",
      icon: iconMappings.RoleHome,
      role: "admin",
      gap: true,
    },
    {
      title: "User",
      path: "/user",
      icon: iconMappings.User,
      role: "admin",
    },
    {
      title: "Oil",
      path: "/oil",
      icon: iconMappings.Oil,
      role: "admin",
    },
    {
      title: "Recipes",
      path: "/recipe",
      icon: iconMappings.recipe,
      role: "admin",
    },
    {
      title: "Courses",
      path: "/courses",
      icon: iconMappings.Course,
      role: "admin",
    },
    {
      title: "Categories",
      path: "/categories",
      icon: iconMappings.Categories,
      role: "admin",
    },
    {
      title: "Advertising Space",
      path: "/advertising",
      icon: iconMappings.Advertising,
      role: "admin",
    },
    {
      title: "News Feed",
      path: "/news",
      icon: iconMappings.News,
      role: "admin",
    },
    {
      title: "Subscription",
      path: "/subscription",
      icon: iconMappings.Upgrade,
      role: "admin",
    },
    {
      title: "Transaction History",
      path: "/history",
      icon: iconMappings.Dollar,
      role: "admin",
    },
    {
      title: "Settings",
      path: "/setting",
      icon: iconMappings.Settings,
      role: "admin",
    },
  ];

  const adminMenus = Menus.filter((menu) => menu.role === "admin");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`w-60 p-4 h-screen border-r-2 border-gray-200 fixed left-0 top-0 bottom-0 z-50 pt-8 transition-all duration-500`}
      >
        <div className="mb-10">
          <img
            src={logo}
            alt="logo"
            className={`cursor-pointer w-full p-1 duration-500`}
          />
        </div>

        <ul
          className={`${
            open ? "" : "flex flex-col items-center justify-center"
          }`}
        >
          {adminMenus.map((Menu, index) => (
            <Link
              to={Menu.path}
              key={index}
              className={`flex rounded-full p-2 cursor-pointer text-sm items-center gap-x-4 mt-3 ${
                location.pathname === Menu.path
                  ? "bg-[#3B9C79] text-white"
                  : "hover:bg-[#E4F7F0]"
              }`}
            >
              <li className="flex items-center gap-x-5">
                <IconContext.Provider
                  value={{ className: "react-icon text-xl" }}
                >
                  <Menu.icon />
                </IconContext.Provider>
                <span className={`origin-left duration-200`}>{Menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>

        <div className="mt-28 bottom-10 absolute w-full">
          <button
            onClick={handleLogout}
            className={`flex cursor-pointer text-sm items-center justify-center  p-2 w-4/5 ms-3 rounded bg-red-500 text-white`}
          >
            <li className="flex items-center justify-center gap-x-4 w-full">
              <FaRightFromBracket />
              <span className={`origin-left duration-200`}>Logout</span>
            </li>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`pl-64 p-4 flex-1 overflow-y-auto transition-all duration-500 h-[100vh]`}
      >
        <div className="bg-[#E4F7F0] shadow px-6 py-4 flex justify-between items-center mb-4">
          {/* Left Section */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome, Sharon 👋
            </h1>
            <p className="text-sm text-gray-500">Have a wonderful day!</p>
          </div>

          {/* Right Section */}
          <div className="relative flex items-center gap-4">
            {/* Notification */}
            <div className="relative">
              <IoNotificationsOutline className="text-2xl text-gray-600 hover:text-green-600 cursor-pointer transition" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            {/* Avatar + Name + Dropdown */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 cursor-pointer hover:bg-white px-3 py-1 rounded-full transition"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium text-gray-800">Sharon</span>
              <FaChevronDown className="text-gray-500 text-sm" />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-14 right-0 w-40 bg-white rounded-md shadow-lg animate-fade-in z-50 overflow-hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full text-left px-4 py-2 hover:bg-green-50 text-gray-700 transition"
                >
                  Profile
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full text-left px-4 py-2 hover:bg-green-50 text-gray-700 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        {/* <CommonBar currentRoute={currentRoute} /> */}
        {/* <div className="flex items-center justify-between gap-2 text-gray-700 font-medium text-lg  mb-4">
          <div>
            <button
            onClick={() => navigate(-1)}
            className="hover:bg-gray-200 p-2 rounded-full transition"
            title="Go back"
          >
            <IoArrowBackOutline className="text-2xl" />
          </button>
          <span className="capitalize text-2xl font-semibold">
            {currentRoute.replace(/-/g, " ")}
          </span>
          </div>
          <div className="flex mr-4 ">
            <button  className="px-6 py-2 rounded-xl text-white bg-green-500 cursor-pointer">Add {currentRoute.replace(/-/g, " ")}</button>
          </div>
        </div> */}
        
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

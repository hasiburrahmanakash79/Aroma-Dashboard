// import React from 'react';

import { IoChevronForwardSharp } from "react-icons/io5";
import CommonBar from "../../../components/Common/CommonBar";
import { Link } from "react-router-dom";

const Setting = () => {
  const currentRoute =
    location.pathname.split("/").filter(Boolean).pop() || "Dashboard";

  return (
    <div className="p-4">
      <CommonBar currentRoute={currentRoute} />
      <div className="border border-gray-300 rounded-2xl">
        <div className="p-4 border-b border-gray-300">
          <h1>Setting</h1>
        </div>
        <div className="p-16 w-full space-y-7">
          <Link to='/setting/profile' className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer ">
            <p>Personal Information</p>
            <IoChevronForwardSharp />
          </Link>
          <Link  className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer ">
            <p>Change Password</p>
            <IoChevronForwardSharp />
          </Link>
          <Link to='/setting/termsCondition' className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer ">
            <p>Terms & Condition</p>
            <IoChevronForwardSharp />
          </Link>
          <Link to='/setting/privacy' className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer ">
            <p>Privacy Policy</p>
            <IoChevronForwardSharp />
          </Link>
          <Link to='/setting/aboutUs' className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer ">
            <p>About Us</p>
            <IoChevronForwardSharp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Setting;

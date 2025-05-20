// import React from 'react';

import { useLocation } from "react-router-dom";
import CommonBar from "../../../components/Common/CommonBar";

const Plants = () => {
  const location = useLocation();
  const currentRoute =
    location.pathname.split("/").filter(Boolean).pop() || "Dashboard";
  return (
    <div className="p-4">
      <CommonBar currentRoute={currentRoute} />
      <div>
        Plants Card
      </div>
    </div>
  );
};

export default Plants;

// src/components/DashboardWidgets/ProgressStatCard.jsx
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ProgressStatCard = ({ title, value, change, changeType }) => {
  return (
    <div className="border border-base-300 shadow rounded-2xl p-4 flex-1">
      <h4 className="text-sm text-gray-500">{title}</h4>
        <div className="divider"></div>
      <div className="mt-2">
        <span className="text-3xl font-bold">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
        <div
          className="h-2 rounded-full bg-blue-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <div className="flex items-center text-sm mt-5">
          {changeType === "up" ? (
            <FaArrowUp className="text-green-500" />
          ) : (
            <FaArrowDown className="text-red-500" />
          )}
          <span
            className={`mx-1 ${
              changeType === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {change} 
          </span>
          <span className="text-gray-500">From Last Week</span>
        </div>
    </div>
  );
};

export default ProgressStatCard;

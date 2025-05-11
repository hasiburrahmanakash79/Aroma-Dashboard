// src/components/DashboardWidgets/AddMemberCard.jsx
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

const AddMemberCard = () => {
  const [selected, setSelected] = useState("Students");

  return (
    <div className="border border-base-300 p-4 rounded-2xl shadow flex flex-col">
      <h4 className="text-gray-500 text-sm">Add Member</h4>
      <div className="divider"></div>
      <div className="flex space-x-2">
        <button
          onClick={() => setSelected("Teacher")}
          className={`flex-1 p-2 rounded-lg border ${selected === "Teacher" ? "bg-blue-500 text-white" : "border-gray-300"}`}
        >
          <div className="flex flex-col items-center space-y-2">
          <p>Teacher</p>
          <FaCirclePlus />
          </div>

        </button>
        <button
          onClick={() => setSelected("Students")}
          className={`flex-1 p-2 rounded-lg border ${selected === "Students" ? "bg-blue-500 text-white" : "border-gray-300"}`}
        >
         <div className="flex flex-col items-center space-y-2">
          <p>Student</p>
          <FaCirclePlus />
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddMemberCard;

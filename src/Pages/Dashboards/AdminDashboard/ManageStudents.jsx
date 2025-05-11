import { FaBell, FaCirclePlus } from "react-icons/fa6";
import AtRiskStudents from "../../../components/AdminDashboardWidgets/AtRiskStudents";
import AllStudents from "../../../components/AdminDashboardWidgets/ManageStudent/AllStudents";
import StudentProgress from "../../../components/AdminDashboardWidgets/ManageStudent/StudentProgress";
import AllTeam from "../../../components/AdminDashboardWidgets/ManageStudent/AllTeam";
import { useState } from "react";

const ManageStudents = () => {
  const [selected, setSelected] = useState("Students");
  return (
    <div className="p-4 md:p-8 min-h-screen">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Student</h1>
        </div>
        <button className="h-10 w-10 rounded-full border border-blue-500 hover:text-white text-blue-500 hover:bg-blue-500 flex items-center justify-center p-3">
          <FaBell className="text-2xl " />
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border border-base-300 p-4 rounded-2xl shadow">
            <StudentProgress />
          </div>
          <div className="h-full">
            <AllTeam />
          </div>
          <div className="border border-base-300 p-4 rounded-2xl shadow flex flex-col">
            <h4 className="text-gray-500 text-sm">Add Student</h4>
            <div className="divider"></div>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelected("Students")}
                className={`flex-1 p-2 rounded-lg border ${
                  selected === "Students"
                    ? "bg-blue-500 text-white"
                    : "border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <p>Student</p>
                  <FaCirclePlus />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-3">
            <AllStudents />
          </div>
          <div>
            <AtRiskStudents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;

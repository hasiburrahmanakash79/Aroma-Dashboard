import { FaBell, FaCirclePlus } from "react-icons/fa6";
import TeacherProgress from "../../../components/AdminDashboardWidgets/ManageTeacher/TeacherProgress";
import AllTeam from "../../../components/AdminDashboardWidgets/ManageStudent/AllTeam";
import AllTeacher from "../../../components/AdminDashboardWidgets/ManageTeacher/AllTeacher";

const ManageTeacher = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Teacher</h1>
        </div>
        <button className="h-10 w-10 rounded-full border border-blue-500 hover:text-white text-blue-500 hover:bg-blue-500 flex items-center justify-center p-3">
          <FaBell className="text-2xl " />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-base-300 p-4 rounded-2xl shadow">
          <TeacherProgress />
        </div>
        <div>
          <AllTeam />
        </div>
        <div>
          <div className="border border-base-300 p-4 rounded-2xl shadow flex flex-col">
            <h4 className="text-gray-500 text-sm">Add Teacher</h4>
            <div className="divider"></div>
            <div className="flex justify-center items-center space-x-2">
              <button className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-500 text-white rounded-2xl p-6 hover:from-blue-500 hover:to-blue-600 transition-all duration-300">
                <span className="text-lg font-semibold mb-2">Add Teacher</span>
                <FaCirclePlus className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <AllTeacher />
      </div>
    </div>
  );
};

export default ManageTeacher;

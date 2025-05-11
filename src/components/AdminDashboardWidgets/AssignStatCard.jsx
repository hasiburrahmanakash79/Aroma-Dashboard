// src/components/DashboardWidgets/AssignStatCard.jsx

const AssignStatCard = ({ data }) => {
    return (
      <div className="border border-base-300 p-4 rounded-2xl shadow flex flex-col">
        <h4 className="text-gray-500 text-sm">All Assign</h4>
        <div className="divider"></div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h5 className="text-gray-700">Teacher</h5>
            <p className="text-sm text-gray-500"><span className="text-xl font-bold text-blue-500">{data.teacherAssigned}</span>/{data.teacherTotal}</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-gray-700">Students</h5>
            <p className="text-sm text-gray-500"><span className="text-xl font-bold text-blue-500">{data.studentAssigned}</span>/{data.studentTotal}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AssignStatCard;
  
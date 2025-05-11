
const AdminHome = () => {
    return (
        <div>
           admin home
            <h1>Welcome to the Admin Dashboard</h1>
            <p>Here you can manage all aspects of the application.</p>
            {/* Add more admin-specific content here */}
        </div>
    );
};

export default AdminHome;

// src/pages/AdminHome.jsx
// import { FaBell } from "react-icons/fa6";
// import AddMemberCard from "../../../components/AdminDashboardWidgets/AddMemberCard";
// import AssignStatCard from "../../../components/AdminDashboardWidgets/AssignStatCard";
// import AtRiskStudents from "../../../components/AdminDashboardWidgets/AtRiskStudents";
// import ProgressStatCard from "../../../components/AdminDashboardWidgets/ProgressStatCard";
// import StudentsGoalChart from "../../../components/AdminDashboardWidgets/StudentsGoalChart";
// import TopPerformingStudents from "../../../components/AdminDashboardWidgets/TopPerformingStudents";
// import {
//   progressData,
//   assignData,
//   atRiskStudents,
//   topStudents,
//   goalAnalyticsData,
// } from "../../../data/adminDashboardData";

// const AdminHome = () => {
//   return (
//     <div className="p-4 md:p-8 min-h-screen">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold mb-4">Welcome Back</h1>
//           <p className="text-gray-500 mb-8">
//             Here’s your personalized dashboard to manage users, track progress,
//             and oversee platform performance.
//           </p>
//         </div>
//         <button className="h-10 w-10 rounded-full border border-blue-500 hover:text-white text-blue-500 hover:bg-blue-500 flex items-center justify-center p-3">
//           <FaBell className="text-2xl " />
//         </button>
//       </div>

//       {/* Top Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         {progressData.map((item, index) => (
//           <ProgressStatCard key={index} {...item} />
//         ))}
//         <AssignStatCard data={assignData} />
//         <AddMemberCard />
//       </div>

//       {/* Add Member and Chart */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         <div className="md:col-span-3 border border-base-300 p-4 rounded-2xl shadow">
//           <StudentsGoalChart data={goalAnalyticsData} />
//         </div>
//         <div>
//           <AtRiskStudents data={atRiskStudents} />
//         </div>
//       </div>

//       {/* Bottom Sections */}
//       <div className="">
//         <div className="">
//           <TopPerformingStudents data={topStudents} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;

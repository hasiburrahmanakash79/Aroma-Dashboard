// src/components/DashboardWidgets/StudentsGoalChart.jsx
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const StudentsGoalChart = ({ data }) => {
//   return (
//     <div className="w-full h-64">
//       <h4 className="text-gray-500 text-sm">Students Goal Analytics</h4>
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data}>
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="weeklyGoal" stroke="#8884d8" strokeWidth={2} name="Weekly Goal" />
//           <Line type="monotone" dataKey="achieve" stroke="#82ca9d" strokeWidth={2} name="Achieve" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default StudentsGoalChart;

import { LineChart } from "@mui/x-charts/LineChart";

const margin = { right: 24 };

export default function StudentsGoalChart({ data }) {
  const pData = data.map((item) => item.weeklyGoal);
  const uData = data.map((item) => item.achieve);
  const xLabels = data.map((item) => item.date);
  return (
    <div>
      <h4 className="text-lg">Students Goal Analytics</h4>
      <LineChart
        height={300}
        series={[
          { data: pData, label: "weeklyGoal", color: "#332434" },
          { data: uData, label: "achieve", color: "#0000FF" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ width: 50 }]}
        margin={margin}
      />
    </div>
  );
}

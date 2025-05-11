// src/components/DashboardWidgets/AtRiskStudents.jsx

const AtRiskStudents = ({ data }) => {
    return (
      <div className="border border-orange-300 p-4 rounded-2xl shadow">
        <h4 className="bg-orange-400 text-white p-2 rounded mb-4">At-Risk Students</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-500 bg-base-300 p-2 rounded-xl">
              <tr >
                <th className="py-2">ID</th>
                <th className="py-2">Name</th>
                <th className="py-2">Risk</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((student, idx) => (
                <tr key={idx} className="border-t text-center border-base-300">
                  <td className="py-4">{student.id}</td>
                  <td className="py-2">{student.name}</td>
                  <td className={`py-2 ${student.risk === "High" ? "text-red-500" : "text-yellow-500"}`}>{student.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default AtRiskStudents;
  
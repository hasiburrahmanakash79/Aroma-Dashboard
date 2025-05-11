import { useState } from "react";

const TopPerformingStudents = ({ data }) => {
  console.log(data);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const displayedData = showAll ? data : data.slice(0, 3);

  return (
    <div className="border border-base-300 p-4 rounded-2xl shadow">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="text-gray-700 text-lg font-semibold">Top Performing Students</h4>
          <p className="text-gray-500">Students with the highest scores and progress.</p>
        </div>
        <button className="text-sm font-bold cursor-pointer hover:text-blue-500" onClick={handleToggle}>
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500">
              <th className="py-2 text-left">ID</th>
              <th className="py-2 text-left">Name</th>
              <th className="py-2 text-left">Class</th>
              <th className="py-2 text-left">Exam</th>
              <th className="py-2 text-left">Mark</th>
              <th className="py-2 text-right">Top</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((student, idx) => (
              <tr key={idx} className="border-t border-base-300 text-gray-500">
                <td className="py-4">{student.id}</td>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.exam}</td>
                <td>{student.mark}/1200</td>
                <td className="font-bold text-blue-500 text-right">{student.top}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
  
  export default TopPerformingStudents;
  
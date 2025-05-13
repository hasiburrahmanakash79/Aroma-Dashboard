import Users from "../Users/Users";
import EarningProgressBar from "./EarningProgressBar";

const Overview = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-5">Overview</h1>
      <div className="flex justify-center items-center gap-10 py-10">
        <div className="border border-base-300 py-7 px-20 rounded-xl text-center ">
          <p>Total Subscribe</p>
          <h1 className="text-5xl font-semibold pt-2">$1200</h1>
        </div>
        <div className="border border-base-300 py-7 px-20 rounded-xl text-center ">
          <p>Total Earnings</p>
          <h1 className="text-5xl font-semibold pt-2">$1200</h1>
        </div>
      </div>

      <EarningProgressBar />
      <div>
        <div className="flex justify-between items-center my-5 px-4">
          <div>
            <h4 className="text-gray-700 text-lg font-semibold">
              Recent Users
            </h4>
            <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <Users />
      </div>
    </div>
  );
};

export default Overview;


import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const CommonBar = ({currentRoute}) => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between gap-2 text-gray-700 font-medium text-lg  mb-8">
              <div>
                <button
                onClick={() => navigate(-1)}
                className="hover:bg-gray-200 p-2 rounded-full transition"
                title="Go back"
              >
                <IoArrowBackOutline className="text-2xl" />
              </button>
              <span className="capitalize text-2xl font-semibold">
                {currentRoute.replace(/-/g, " ")}
              </span>
              </div>
              <div className="flex  ">
                <button  className="px-6 py-2 rounded-xl text-white bg-green-500 cursor-pointer">Add {currentRoute.replace(/-/g, " ")}</button>
              </div>
    </div>
  )
}

export default CommonBar
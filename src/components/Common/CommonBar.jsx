
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';

const CommonBar = ({currentRoute}) => {
    const navigate = useNavigate();
    const getAddButtonPath = () => {
    return `/${currentRoute.toLowerCase()}/add`;
  };

  // Get the correct button text
  const getAddButtonText = () => {
    return `Add ${currentRoute}`;
  };
  return (
    <div className="flex items-center justify-between gap-2 text-gray-700 font-medium text-lg  mb-8">
              <div className='flex justify-center items-center gap-2'>
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
                  <Link
                      to={getAddButtonPath()}
                      className="px-6 py-2 rounded-xl text-white bg-[#3B9C79] hover:bg-[#328569] cursor-pointer transition"
                      >
                        {getAddButtonText()}
                  </Link>
              </div>
    </div>
  )
}

export default CommonBar
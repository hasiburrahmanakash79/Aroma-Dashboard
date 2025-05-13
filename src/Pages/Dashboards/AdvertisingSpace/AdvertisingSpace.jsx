import { useLocation } from "react-router-dom";
import CommonBar from "../../../components/Common/CommonBar";
import AdvertisingSpaces from "./AdvertisingSpaces";
const AdvertisingSpace = () => {

      const location = useLocation();
      const currentRoute =location.pathname.split("/").filter(Boolean).pop() || "Dashboard";


  
  return (
    <div className="p-4">
        <CommonBar  currentRoute={currentRoute} />
      <div className="grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {AdvertisingSpaces.map((advertisingSpace, index) => (
          <div
            key={index}
            className="rounded-xl border-2 border-green-200 shadow"
          >
            <img
              src={advertisingSpace.image}
              alt={advertisingSpace.name}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold mb-2">{advertisingSpace.name}</h1>
              
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default AdvertisingSpace;
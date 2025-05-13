import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import CommonBar from "../../../components/Common/CommonBar";
import { useLocation } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname.split("/").filter(Boolean).pop() || "Dashboard";

  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("Gesundheit"); // Default to "Gesundheit" as active

  // Categories data
  const categories = [
    { name: "Gesundheit", premium: false },
    { name: "Feel good", premium: false },
    { name: "Beauty", premium: false },
    { name: "Haushalt", premium: false },
    { name: "Kinder", premium: true },
    { name: "Senioren", premium: true },
    { name: "Tiere", premium: true },
    { name: "Hormon-Balance", premium: true },
    { name: "Aroma Massagen", premium: true },
    { name: "Aura/Chakra", premium: true },
    { name: "Meditation/ Yoga", premium: true },
  ];

  // Handle category click
  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <div className="p-4">
      <CommonBar currentRoute={currentRoute} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-4 rounded-md flex items-center justify-center h-16 transition-all duration-300 cursor-pointer ${
              activeCategory === category.name
                ? "bg-[#3B9C79] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <span className="font-medium">
              {category.name}
              {category.premium && (
                <span className="text-xs ml-1">(Upgrade)</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
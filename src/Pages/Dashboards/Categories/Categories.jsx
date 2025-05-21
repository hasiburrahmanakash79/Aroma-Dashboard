import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import CommonModal from "../../../components/Common/CommonModal"; // Update this path as needed

const Categories = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Gesundheit");

  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const [categories, setCategories] = useState([
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
  ]);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, { name: newCategory, premium: false }]);
      setNewCategory("");
      setShowModal(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            title="Go back"
          >
            <IoArrowBackOutline className="text-2xl" />
          </button>
          <h2 className="font-semibold text-2xl">Categories</h2>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 rounded-full text-sm bg-[#3B9C79] hover:shadow-xl text-white cursor-pointer transition"
        >
          Add Categories
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
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

      {/* ✅ Modal for adding category */}
      <CommonModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Category"
      >
        <div className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Enter Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
          <div className="text-right">
            <button
              onClick={handleAddCategory}
              className="bg-[#3B9C79] text-white px-6 py-2 rounded-full"
            >
              Save
            </button>
          </div>
        </div>
      </CommonModal>
    </div>
  );
};

export default Categories;

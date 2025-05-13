import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddCourses = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    courseLink: "",
    description: "",
    benefits: ["", "", "", "", ""] // Default 5 benefits
  });
  
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle benefit changes
  const handleBenefitChange = (index, value) => {
    const newBenefits = [...formData.benefits];
    newBenefits[index] = value;
    setFormData({
      ...formData,
      benefits: newBenefits
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file
      });
      
      // Preview image
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally send the data to your backend
    console.log("Submitting course data:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or redirect
      alert("Course added successfully!");
      // You could redirect here or clear the form
    }, 1000);
  };

  return (
    <div className="p-4">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link 
          to="/courses" 
          className="flex items-center text-gray-700 hover:text-[#3B9C79] mr-4"
        >
          <IoChevronBackOutline className="text-xl mr-1" />
          
        </Link>
        <h1 className="text-2xl font-semibold">Add Courses</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        {/* Image Upload */}
        <div className="mb-6">
          <div className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 mb-2">
            {previewImage ? (
              <img 
                src={previewImage} 
                alt="Course Preview" 
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6">
                <svg className="w-10 h-10 mb-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Upload Image</span>
                </p>
                <p className="text-xs text-gray-500">PNG, JPG or JPEG (Max 2MB)</p>
              </div>
            )}
            <input 
              type="file" 
              className="hidden" 
              accept="image/*" 
              id="image-upload" 
              onChange={handleImageUpload}
            />
          </div>
          <label 
            htmlFor="image-upload" 
            className="block text-sm font-medium text-center text-[#3B9C79] cursor-pointer"
          >
            Choose file
          </label>
        </div>

        {/* Course Title and Link */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Course Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter a name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#3B9C79] focus:border-[#3B9C79] outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="courseLink" className="block text-sm font-medium text-gray-700 mb-1">
              Course link
            </label>
            <input
              type="text"
              id="courseLink"
              name="courseLink"
              placeholder="enter a name"
              value={formData.courseLink}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#3B9C79] focus:border-[#3B9C79] outline-none"
            />
          </div>
        </div>

        {/* Course Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Course Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="enter a description"
            rows="6"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#3B9C79] focus:border-[#3B9C79] outline-none"
          ></textarea>
        </div>

        {/* Benefits List */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Benefits (5 points)
          </label>
          <div className="space-y-2">
            {formData.benefits.map((benefit, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Benefit #${index + 1}`}
                value={benefit}
                onChange={(e) => handleBenefitChange(index, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#3B9C79] focus:border-[#3B9C79] outline-none"
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-[#7BC9AC] hover:bg-[#3B9C79] text-white font-medium rounded-lg transition duration-300 w-32"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourses;
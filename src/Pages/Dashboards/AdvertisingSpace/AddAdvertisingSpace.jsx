import { useState } from "react";
import toast from "react-hot-toast";
import { IoArrowBackOutline, IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddAdvertisingSpace = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    link: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
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
    console.log("Submitting Advertising data:", formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or redirect
      toast.success("Advertising added successfully!");
      // You could redirect here or clear the form
    }, 1000);
  };

  return (
    <div className="p-4">
      {/* Header with back button */}
      <div className="flex items-center mb-5">
        <Link to="/advertising" className="mr-4">
          <IoArrowBackOutline className="text-2xl" />
        </Link>
        <h1 className="text-2xl font-semibold">Add Advertising space</h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto p-6 border rounded-xl border-gray-300"
      >
        {/* Image Upload */}
        <div className="mb-6">
          <label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center w-50 h-64 border border-gray-200 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 mb-2"
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-gray-600">
                <IoCloudUploadOutline className="text-4xl" />
                <p className="my-2 text-sm font-semibold">Upload Image</p>
              </div>
            )}
            <input
              type="file"
              className="hidden"
              accept="image/*"
              id="image-upload"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Link Title and Link */}
        <div className=" border border-gray-300 rounded-xl p-6 pd-0 gap-6 mb-6">
          <div className=" grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Link Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter a title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>

            <div>
              <label htmlFor="link" className="block text-sm mb-1">
                Link
              </label>
              <input
                type="text"
                id="link"
                name="link"
                placeholder="Enter a link"
                value={formData.link}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className=" py-3 bg-[#7BC9AC] hover:bg-[#3B9C79] font-medium rounded-lg transition duration-300 w-62"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAdvertisingSpace;

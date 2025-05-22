import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoArrowBackOutline, IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddAdvertisingSpace = () => {
  const { register, handleSubmit, setValue, trigger } = useForm();
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    const finalData = {
      ...data,
      image: data.image?.[0] || null,
    };
    console.log("Submitted Data:", finalData);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Advertising space added successfully!");
    }, 1000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", e.target.files);
      trigger("image");
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link to="/advertising" className="mr-4">
          <IoArrowBackOutline className="text-2xl" />
        </Link>
        <h1 className="text-2xl font-semibold">Add Advertising Space</h1>
      </div>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto p-6 border border-gray-200 rounded-lg"
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
              id="image-upload"
              accept="image/*"
              {...register("image")}
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        {/* Link Title and Link */}
        <div className="border border-gray-300 rounded-lg p-6 pb-0 gap-6 mb-6">
          <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
            <div>
              <label
                htmlFor="LinkTitle"
                className="block text-xl font-medium mb-1"
              >
                Link Title
              </label>
              <input
                type="text"
                id="LinkTitle"
                {...register("LinkTitle")}
                placeholder="Enter a name"
                className="w-full p-3 border border-gray-200 rounded-lg outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="AddAdvertisingSpaceLink"
                className="block text-xl font-medium mb-1"
              >
                Link
              </label>
              <input
                type="text"
                id="AddAdvertisingSpaceLink"
                {...register("AddAdvertisingSpaceLink")}
                placeholder="Enter a link"
                className="w-full p-3 border border-gray-200 rounded-lg outline-none"
              />
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-3 bg-[#7BC9AC] hover:bg-[#3B9C79] text-white font-medium rounded-lg transition duration-300 w-62"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAdvertisingSpace;

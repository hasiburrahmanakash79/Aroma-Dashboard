import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoArrowBackOutline, IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill's default theme

const AddPlants = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      image: null,
      description: "",
    },
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [description, setDescription] = useState("");

  const onSubmit = (data) => {
    const fullData = { ...data, description };
    console.log("Submitting Plant:", fullData);
    toast.success("Plant added successfully!");
    reset();
    setDescription("");
    setPreviewImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }, { font: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      [{ align: [] },],
      ["link", "image"],
    ],
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link to="/plants" className="mr-4">
          <IoArrowBackOutline className="text-2xl" />
        </Link>
        <h1 className="text-2xl font-semibold">Add Plant</h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto p-6 border border-gray-300 rounded-xl"
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

        {/* Inputs */}
        <div className="border border-gray-300 rounded-xl p-6 pb-0 gap-6 mb-6">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm mb-1">
              Plant Title
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter a plant title"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
            />
          </div>

          {/* Rich Text Editor */}
          <div className="mb-6 w-full rounded">
            <label htmlFor="description" className="block text-sm mb-1">
              Description
            </label>
            <ReactQuill
            //   {...register("description", { required: true })}
              value={description}
              onChange={setDescription}
              theme="snow"
              modules={modules}
              placeholder="Write your plant description here..."
              className="quill-custom"
            />
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

export default AddPlants;

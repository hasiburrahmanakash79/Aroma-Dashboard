import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import {
  IoArrowBackOutline,
  IoClose,
  IoAdd,
  IoCloudUploadOutline,
} from "react-icons/io5";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

const AddRecipes = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      image: null,
      description: "",
      category: "",
      tags: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [description, setDescription] = useState("");

  const onSubmit = (data) => {
    console.log("Submitting recipe:", data);
    toast.success("Recipe added successfully!");
    reset();
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
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link to="/Recipe" className="mr-4">
          <IoArrowBackOutline className="text-2xl" />
        </Link>
        <h1 className="text-2xl font-semibold">Add Recipe</h1>
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

        {/* Form Fields */}
        <div className="border border-gray-300 rounded-xl p-6 pb-0 gap-6 mb-6">
          <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Recipe Title
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter a recipe title"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Recipe Category</label>
              <select
                {...register("category", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              >
                <option value="">Select a category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
          </div>

          <div className="mb-6 w-full">
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

         {/* Tags */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Add Tags</label>
            <div className="space-y-3">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-5">
                  <input
                    {...register(`tags.${index}.value`, { required: true })}
                    type="text"
                    placeholder={`Tag ${index + 1}`}
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                  />
                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500 text-lg"
                    >
                      <IoClose />
                    </button>
                  )}
                  {index === fields.length - 1 && (
                    <button
                      type="button"
                      onClick={() => append({ value: "" })}
                      className="text-xl p-3 border border-gray-300 rounded-lg outline-none"
                      title="Add Tag"
                    >
                      <IoAdd />
                    </button>
                  )}
                </div>
              ))}
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

export default AddRecipes;

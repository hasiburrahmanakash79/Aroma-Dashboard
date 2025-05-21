import Select from "react-select";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import {
  IoArrowBackOutline,
  IoClose,
  IoCloudUploadOutline,
} from "react-icons/io5";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

const AddRecipes = () => {
  const oilOptions = [
    { value: "almond", label: "Almond Oil" },
    { value: "coconut", label: "Coconut Oil" },
    { value: "olive", label: "Olive Oil" },
    { value: "argan", label: "Argan Oil" },
    { value: "jojoba", label: "Jojoba Oil" },
    { value: "castor", label: "Castor Oil" },
    { value: "grapeseed", label: "Grapeseed Oil" },
    { value: "mustard", label: "Mustard Oil" },
  ];

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      image: null,
      description: "",
      tags: [],
    },
  });

  const [previewImage, setPreviewImage] = useState(null);

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const onSubmit = (data) => {
    data.tags = tags; // inject tags before submit
    console.log("Submitting recipe:", data);
    toast.success("Recipe added successfully!");
    reset();
    setPreviewImage(null);
    setTags([]);
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

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.includes(newTag) && tags.length < 20) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, i) => i !== indexToRemove));
  };

  useEffect(() => {
    setValue("tags", tags);
  }, [tags, setValue]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }, { font: [] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }],
      ["link", "image"],
    ],
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-6">
        <Link to="/Recipe" className="mr-4">
          <IoArrowBackOutline className="text-2xl" />
        </Link>
        <h1 className="text-2xl font-semibold">Add Recipe</h1>
      </div>

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
            <div className="mb-4">
              <label className="block text-sm mb-1">Oil Name</label>
              <Controller
                name="oil_name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    options={oilOptions}
                    styles={{
                      control: (base) => ({
                        ...base,
                        padding: "6px",
                        borderRadius: "8px",
                        borderColor: "#d1d5db",
                        boxShadow: "none",
                      }),
                      menu: (base) => ({
                        ...base,
                        zIndex: 10,
                      }),
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="mb-6 w-full">
            <label htmlFor="description" className="block text-sm mb-1">
              Description
            </label>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <ReactQuill
                  {...field}
                  theme="snow"
                  modules={modules}
                  placeholder="Write your plant description here..."
                  className="quill-custom"
                />
              )}
            />
          </div>

          {/* Tag Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Add Tags (max 20)
            </label>

            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="hover:text-red-500"
                    title="Remove tag"
                  >
                    <IoClose />
                  </button>
                </span>
              ))}
            </div>

            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a tag and press Enter or Comma"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
            />
          </div>
        </div>

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

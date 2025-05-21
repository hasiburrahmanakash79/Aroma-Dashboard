import { useState } from "react";
import Select from "react-select";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import {
  IoArrowBackOutline,
  IoCloudUploadOutline,
  IoAdd,
  IoClose,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddOils = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [description, setDescription] = useState("");

  const plantOptions = [
  { value: "almond", label: "Almond Plant" },
  { value: "coconut", label: "Coconut Palm" },
  { value: "olive", label: "Olive Tree" },
  { value: "argan", label: "Argan Tree" },
  { value: "jojoba", label: "Jojoba Shrub" },
  { value: "castor", label: "Castor Plant" },
  { value: "grapeseed", label: "Grapevine" },
  { value: "mustard", label: "Mustard Plant" },
  // ... aro plant name add kora jabe
];


  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      image: null,
      oilLink: "",
      LinkTitle: "",
      description: "",
      category: "",
      tags: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Submitted data:", data);
      setIsSubmitting(false);
      toast.success("Oil added successfully!");
      reset();
      setPreviewImage(null);
    }, 1000);
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
        <Link to="/oil" className="mr-4">
          <IoArrowBackOutline className="text-2xl" />
        </Link>
        <h1 className="text-2xl font-semibold">Add Oil</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto p-6 border border-gray-300 rounded-2xl"
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

        {/* Oil Info Fields */}
        <div className="border border-gray-300 rounded-2xl p-6 pb-0 gap-6 mb-6">
          <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1">
                Oil Title
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter oil name"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Plant Name
              </label>
              <Controller
                              name="plant_name"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  options={plantOptions}
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
                        placeholder="Write your oil description here..."
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
            className="py-3 bg-[#7BC9AC] hover:bg-[#3B9C79] text-white font-medium rounded-lg transition duration-500 w-62"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOils;

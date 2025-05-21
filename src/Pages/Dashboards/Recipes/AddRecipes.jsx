import Select from "react-select";
import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
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
  const oilOptions = [
    { value: "almond", label: "Almond Oil" },
    { value: "coconut", label: "Coconut Oil" },
    { value: "olive", label: "Olive Oil" },
    { value: "argan", label: "Argan Oil" },
    { value: "jojoba", label: "Jojoba Oil" },
    { value: "castor", label: "Castor Oil" },
    { value: "grapeseed", label: "Grapeseed Oil" },
    { value: "mustard", label: "Mustard Oil" },
    // ... aro onek option add kora jabe
  ];
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
            <div className="mb-4">
              <label className="block text-sm mb-1">Oil Name</label>
              <Controller
  name="oil_name"
  control={control}
  rules={{ required: true }}
  render={({ field }) => (
    <Select
      {...field}
      isMulti                         // ✅ Enable multiple select
      options={oilOptions}
      styles={{
        control: (base) => ({
          ...base,
          padding: '6px',
          borderRadius: '8px',
          borderColor: '#d1d5db',
          boxShadow: 'none',
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





{/* Tags */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Add Tags</label>
//             <div className="space-y-3">
//               {fields.map((field, index) => (
//                 <div key={field.id} className="flex items-center gap-5">
//                   <input
//                     {...register(`tags.${index}.value`, { required: true })}
//                     type="text"
//                     placeholder={`Tag ${index + 1}`}
//                     className="w-full p-3 border border-gray-300 rounded-lg outline-none"
//                   />
//                   {fields.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => remove(index)}
//                       className="text-red-500 text-lg"
//                     >
//                       <IoClose />
//                     </button>
//                   )}
//                   {index === fields.length - 1 && (
//                     <button
//                       type="button"
//                       onClick={() => append({ value: "" })}
//                       className="text-xl p-3 border border-gray-300 rounded-lg outline-none"
//                       title="Add Tag"
//                     >
//                       <IoAdd />
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>


// ekhane dekhte parteso plus button e click korle aro ekti tag field add hocche abar seyta remove korau jacche. but amu ekhon chacchilam ekti input filed e thakbe just ami multiple tag add korte parbo sorboccho 20 ta tag add korte parbo. abar chaile kono stage remove korar jonno tag er pashe cross icon o thakbe.amar multiple input field lagbe na. multipul tag jate input dite pari seyta lagbe. 

// like fiverr skill add, LinkedIn skill add
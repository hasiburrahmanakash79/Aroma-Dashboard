import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";

const TermsCondition = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    terms:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.",
  });

  const handleEditClick = () => {
    setDescription(formData.terms); // 🟢 Load old data into editor
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, terms: description })); // 🟢 Save updated text
    setIsEditing(false);
    console.log("Saved data:", description); // API call here
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
    <form onSubmit={handleSubmit} className="border rounded-lg border-gray-300">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-300 p-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            title="Go back"
          >
            <IoArrowBackOutline className="text-xl" />
          </button>
          <h2 className="font-semibold text-lg">Terms And Conditions</h2>
        </div>

        {!isEditing && (
          <button
            type="button"
            onClick={handleEditClick}
            className="bg-[#328569] text-white py-2 px-4 rounded-full flex items-center gap-2"
          >
            ✎ Edit
          </button>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        {!isEditing ? (
          <p className="text-gray-700 whitespace-pre-line leading-7">
            {formData.terms}
          </p>
        ) : (
          <ReactQuill
            value={description}
            onChange={setDescription}
            theme="snow"
            modules={modules}
            placeholder="Write your privacy policy here..."
            className="quill-custom"
          />
        )}
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-end px-5 pb-5">
          <button
            type="submit"
            className="bg-[#328569] text-white px-6 py-2 rounded-lg"
          >
            Save Info
          </button>
        </div>
      )}
    </form>
  );
};

export default TermsCondition;

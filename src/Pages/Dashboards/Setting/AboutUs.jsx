import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    terms: `
      <p>
      Welcome to <strong>Aroma Queen</strong>, your go-to destination for self-care, beauty, and wellness. 
      Created with love for every queen out there, our mission is to inspire confidence and celebrate femininity 
      through premium products and empowering content.
    </p>
    <p>
      At Aroma Queen, we believe that every woman deserves to feel beautiful, inside and out. 
      Whether you're browsing our curated collections of skincare, essential oils, or wellness accessories, 
      or learning through our blog and tutorials — we’re here to support your journey toward holistic beauty.
    </p>
    <p>
      As a proudly woman-focused platform, we blend the elegance of tradition with the convenience of modern 
      e-commerce. Every product is handpicked with care, ensuring quality, purity, and purpose.
    </p>
    <p>
      Join our community of queens and experience the magic of self-love, one drop of aroma at a time.
    </p>
    <p>
      <em>Because you deserve nothing less than royal treatment.</em>
    </p>
      `,
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
          <h2 className="font-semibold text-lg">About Us</h2>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {!isEditing ? (
          <div
            className="text-gray-700 leading-7 privacy-content"
            dangerouslySetInnerHTML={{ __html: formData.terms }}
          />
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

      {/* Edit and Update Button */}
      {!isEditing && (
        <div className="flex justify-end px-5 pb-5">
          <button
            type="button"
            onClick={handleEditClick}
            className="bg-[#328569] text-white py-2 px-6 rounded-full"
          >
            ✎ Edit
          </button>
        </div>
      )}
      {isEditing && (
        <div className="flex justify-end px-5 pb-5">
          <button
            type="submit"
            className="bg-[#328569] text-white px-6 py-2 rounded-full"
          >
            Update Info
          </button>
        </div>
      )}
    </form>
  );
};

export default AboutUs;

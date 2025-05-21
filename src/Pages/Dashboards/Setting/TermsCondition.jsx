import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";

const TermsCondition = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    terms: `
      <p>Welcome to <strong>Aroma Queen</strong>. By accessing or using our website, you agree to the following terms and conditions. Please read them carefully before using our services.</p>

    <h3>1. Acceptance of Terms</h3>
    <p>By using our website, you accept these Terms & Conditions in full. If you disagree with any part, you must not use Aroma Queen’s services.</p>

    <h3>2. User Eligibility</h3>
    <p>This website is intended for individuals aged 13 years or older. If you are under 18, you may only use this site under the supervision of a parent or legal guardian.</p>

    <h3>3. Account Responsibility</h3>
    <p>If you create an account on Aroma Queen, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>

    <h3>4. Product Information</h3>
    <p>We strive to provide accurate descriptions and pricing for all products. However, Aroma Queen does not guarantee the complete accuracy of all content. We reserve the right to update or correct information without prior notice.</p>

    <h3>5. Orders & Payments</h3>
    <p>All purchases are subject to availability and confirmation of payment. We reserve the right to cancel or refuse any order for any reason, including pricing errors or suspicion of fraud.</p>

    <h3>6. Shipping & Delivery</h3>
    <p>We aim to deliver products on time, but delivery dates are estimates. Aroma Queen is not liable for delays caused by third-party courier services.</p>

    <h3>7. Returns & Refunds</h3>
    <p>Our return policy is outlined on our Returns & Refunds page. Please review it before making a purchase.</p>

    <h3>8. Intellectual Property</h3>
    <p>All content on Aroma Queen — including text, graphics, logos, and images — is the property of Aroma Queen and may not be used without our written consent.</p>

    <h3>9. Prohibited Use</h3>
    <p>You agree not to use this website for any unlawful purpose, or to solicit others to perform or participate in any illegal acts, violate any laws, or infringe on our intellectual property rights.</p>

    <h3>10. Changes to Terms</h3>
    <p>We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the site after changes means you accept the new terms.</p>

    <h3>11. Contact</h3>
    <p>If you have any questions regarding these Terms & Conditions, please contact us at <a href="mailto:support@aromaqueen.com">support@aromaqueen.com</a>.</p>

    <p>Thank you for being a part of the Aroma Queen community!</p>`,
  });

  const handleEditClick = () => {
    setDescription(formData.terms); // Load old data into editor
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, terms: description })); // Save updated text
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
      <div className="border-b border-gray-300 p-5">
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

export default TermsCondition;

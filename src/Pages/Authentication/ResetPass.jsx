import bannerImage from '../../assets/images/signIn.png'


const ResetPass = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: {bannerImage}, // Change this
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-2 text-gray-800">
          ← Reset Password
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Your password must be 8–10 characters long.
        </p>

        <form className="space-y-4">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3B9C79]"
          />
          <input
            type="password"
            placeholder="Re-enter Password"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3B9C79]"
          />

          <button
            type="submit"
            className="w-full bg-[#3B9C79] text-white py-2 rounded-full hover:bg-[#328569] transition"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;

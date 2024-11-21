import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const ResetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Reset email sent! Please check your inbox.");
      navigate(location.state.from)
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handlePasswordReset}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter the email associated with your account and we'll send an email
          with instructions to reset your password.
        </p>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="enter your email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Link
          to="/login"
          className="text-green-500 text-sm hover:underline block mb-4"
        >
          Wait, I remember my password
        </Link>

        <button
          type="submit"
          className="w-full bg-[#2e984e] text-white py-2 rounded hover:bg-green-600 transition"
        >
          Reset Password
        </button>

        <Link
          to="/login"
          className="flex items-center justify-center mt-4 text-gray-600 text-sm hover:underline"
        >
          ← Back to log in
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import RegisterForm from "../components/RegisterForm";

// const API_URL = import.meta.env.VITE_API_URL;

// function RegisterScreen() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("student");
//   const [message, setMessage] = useState("");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setMessage("");
//   };

//   const handleRegister = async (form) => {
//     setMessage("");
//     try {
//       const res = await axios.post(`${API_URL}/api/auth/register`, form);
//       if (res.status === 201) {
//         setMessage("Registration successful!");
//         navigate("/login");
//       } else {
//         setMessage(res.data.error || "Registration failed");
//       }
//     } catch (err) {
//       setMessage(err.response?.data?.error || "Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
//       <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
//         <div className="flex mb-6">
//           <button
//             className={`flex-1 py-2 rounded-tl rounded-bl font-semibold border-b-2 transition-colors ${
//               activeTab === "student"
//                 ? "border-blue-600 text-blue-600 bg-blue-50"
//                 : "border-gray-200 text-gray-600 bg-gray-100"
//             }`}
//             onClick={() => handleTabChange("student")}
//             type="button"
//           >
//             Student
//           </button>
//           <button
//             className={`flex-1 py-2 rounded-tr rounded-br font-semibold border-b-2 transition-colors ${
//               activeTab === "instructor"
//                 ? "border-blue-600 text-blue-600 bg-blue-50"
//                 : "border-gray-200 text-gray-600 bg-gray-100"
//             }`}
//             onClick={() => handleTabChange("instructor")}
//             type="button"
//           >
//             Instructor
//           </button>
//         </div>

//         <RegisterForm
//           role={activeTab}
//           onSubmit={handleRegister}
//           message={message}
//         />

//         <div className="text-center mt-4">
//           <span>Already have an account? </span>
//           <button
//             className="text-blue-600 underline hover:text-blue-800 font-semibold"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RegisterScreen;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const API_URL = import.meta.env.VITE_API_URL;

function RegisterScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("student");
  const [message, setMessage] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMessage("");
  };

  const handleRegister = async (form) => {
    setMessage("");
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, form);
      if (res.status === 201) {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        setMessage(res.data.error || "Registration failed");
      }
    } catch (err) {
      setMessage(err.response?.data?.error || "Registration failed");
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = `${API_URL}/api/auth/google`;
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Image Section */}
      <div className="hidden md:flex md:w-1/2 h-screen">
        <img
          src="https://img.freepik.com/free-photo/happy-young-student-girl-holding-books-smiling-camera_176420-19170.jpg?t=st=1749443790~exp=1749447390~hmac=9ec263ec3149b71e20e635d11215cc3b4e6127473a136e3d221057d3e4e1c54b&w=1380"
          alt="Student Registering"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#253a59]">
            Sign Up
          </h2>
          <p className="text-center mb-4 text-gray-600">
            Create your account to get started.
          </p>

          {/* Tabs */}
          <div className="flex mb-6">
            <button
              className={`flex-1 py-2 rounded-tl rounded-bl font-semibold border-b-2 transition-colors ${
                activeTab === "student"
                  ? "border-[#23b8d0] text-[#23b8d0] bg-blue-50"
                  : "border-gray-200 text-gray-600 bg-gray-100"
              }`}
              onClick={() => handleTabChange("student")}
              type="button"
            >
              Student
            </button>
            <button
              className={`flex-1 py-2 rounded-tr rounded-br font-semibold border-b-2 transition-colors ${
                activeTab === "instructor"
                  ? "border-[#23b8d0] text-[#23b8d0] bg-blue-50"
                  : "border-gray-200 text-gray-600 bg-gray-100"
              }`}
              onClick={() => handleTabChange("instructor")}
              type="button"
            >
              Instructor
            </button>
          </div>

          {/* Register Form */}
          <RegisterForm
            role={activeTab}
            onSubmit={handleRegister}
            message={message}
          />

          {/* Google Signup */}
          <div className="my-4">
            <button
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 py-2 rounded-md shadow-sm transition text-sm font-medium"
            >
              <FcGoogle size={20} />
              Sign up with Google
            </button>
          </div>

          {/* Link to Login */}
          <div className="text-center mt-4">
            <span>Already have an account? </span>
            <button
              className="text-[#253a59] underline hover:text-blue-800 font-semibold"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;

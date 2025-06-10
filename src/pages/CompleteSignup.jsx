import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function CompleteSignup({ token }) {
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${API_URL}/api/auth/set-role`,
        { role, firstName, lastName, bio },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 200) {
        const userRes = await axios.get(`${API_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const userRole = userRes.data?.role;

        if (userRole === "instructor") {
          navigate("/instructor/dashboard", { replace: true });
        } else if (userRole === "student") {
          navigate("/student/dashboard", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      } else {
        setMessage(res.data.error || "Failed to set role");
      }
    } catch (err) {
      setMessage(err.response?.data?.error || "Failed to set role");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-[#253a59] mb-6 text-center">
          Complete Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#253a59] mb-1">
              Select your role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#23b8d0] focus:outline-none"
            >
              <option value="">-- Select Role --</option>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#23b8d0] focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#23b8d0] focus:outline-none"
            />
          </div>

          <div>
            <textarea
              name="bio"
              placeholder="Short Bio"
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#23b8d0] focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#23b8d0] hover:bg-[#1aa4b8] text-white font-semibold py-2 rounded-md transition"
          >
            {loading ? "Saving..." : "Continue"}
          </button>

          {message && (
            <div className="text-center text-sm text-red-600 mt-2">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteSignup;

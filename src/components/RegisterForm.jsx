import React, { useState, useEffect } from "react";

const RegisterForm = ({ onSubmit, role = "student", message }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    bio: "",
  });

  useEffect(() => {
    setForm({
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      bio: "",
    });
  }, [role]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, role });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2 text-center text-[#253a59]">
        {role === "student"
          ? "Student Registration"
          : "Instructor Registration"}
      </h2>

      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          name="username"
          placeholder="Enter a username"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#23b8d0] focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#23b8d0] focus:outline-none"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter a password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#23b8d0] focus:outline-none"
        />
      </div>

      {/* First Name */}
      <div>
        <label
          htmlFor="firstName"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          name="firstName"
          placeholder="Your first name"
          value={form.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#23b8d0] focus:outline-none"
        />
      </div>

      {/* Last Name */}
      <div>
        <label
          htmlFor="lastName"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          name="lastName"
          placeholder="Your last name"
          value={form.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#23b8d0] focus:outline-none"
        />
      </div>

      {/* Bio */}
      <div>
        <label
          htmlFor="bio"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Bio
        </label>
        <textarea
          name="bio"
          placeholder="A short bio"
          value={form.bio}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#23b8d0] focus:outline-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#23b8d0] hover:bg-[#1ba6be] text-white font-semibold py-2 rounded-lg transition"
      >
        Register
      </button>

      {/* Message */}
      {message && (
        <div className="text-center text-sm text-red-600 mt-2">{message}</div>
      )}
    </form>
  );
};

export default RegisterForm;

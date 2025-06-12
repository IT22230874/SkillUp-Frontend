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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm({
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      bio: "",
    });
    setErrors({});
  }, [role]);

  const validate = () => {
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    } else if (form.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(form.username)) {
      newErrors.username =
        "Username can only contain letters, numbers, and underscores";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(form.password)
    ) {
      newErrors.password =
        "Password must include uppercase, lowercase, number, and special character";
    }

    if (form.firstName && !/^[a-zA-Z]{2,}$/.test(form.firstName)) {
      newErrors.firstName = "First name must be at least 2 letters";
    }

    if (form.lastName && !/^[a-zA-Z]{2,}$/.test(form.lastName)) {
      newErrors.lastName = "Last name must be at least 2 letters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ ...form, role });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-2 text-center text-[#253a59]">
        {role === "student"
          ? "Student Registration"
          : "Instructor Registration"}
      </h2>
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
        {errors.username && (
          <p className="text-sm text-red-600 mt-1">{errors.username}</p>
        )}
      </div>
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
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email}</p>
        )}
      </div>
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
        {errors.password && (
          <p className="text-sm text-red-600 mt-1">{errors.password}</p>
        )}
      </div>
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
        {errors.firstName && (
          <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
        )}
      </div>
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
        {errors.lastName && (
          <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
        )}
      </div>
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
      <button
        type="submit"
        className="w-full bg-[#23b8d0] hover:bg-[#1ba6be] text-white font-semibold py-2 rounded-lg transition"
      >
        Register
      </button>
      {message && (
        <div className="text-center text-sm text-red-600 mt-2">{message}</div>
      )}
    </form>
  );
};

export default RegisterForm;

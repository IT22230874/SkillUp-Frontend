import React, { useState } from "react";

function CourseForm({
  onSubmit,
  form,
  setForm,
  editingCourse,
  courseImage,
  courseImageUploading,
  handleCourseImageChange,
}) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) {
      newErrors.title = "Course title is required";
    } else if (form.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (!courseImage && !editingCourse) {
      newErrors.image = "Course image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(e);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {editingCourse ? "Edit Course" : "Add New Course"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Course Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={(e) => {
              setForm({ ...form, title: e.target.value });
              setErrors({ ...errors, title: "" });
            }}
            placeholder="Enter course title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={(e) => {
              setForm({ ...form, description: e.target.value });
              setErrors({ ...errors, description: "" });
            }}
            placeholder="Enter course description"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Course Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              handleCourseImageChange(e);
              setErrors({ ...errors, image: "" });
            }}
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-600">{errors.image}</p>
          )}
          {courseImageUploading && (
            <p className="text-sm text-blue-600 mt-1">Uploading...</p>
          )}
          {courseImage && (
            <img
              src={courseImage}
              alt="Course"
              className="h-20 w-20 mt-2 rounded object-cover border"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#23b8d0] hover:bg-[#1ba6be] text-white font-semibold py-2 rounded-lg transition"
        >
          {editingCourse ? "Update Course" : "Add Course"}
        </button>
      </form>
    </div>
  );
}

export default CourseForm;

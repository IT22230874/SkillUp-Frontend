// import React from "react";

// function CourseForm({
//   onSubmit,
//   form,
//   setForm,
//   editingCourse,
//   courseImage,
//   courseImageUploading,
//   handleCourseImageChange,
// }) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow mb-6">
//       <h2 className="text-xl font-semibold mb-4">
//         {editingCourse ? "Edit Course" : "Add New Course"}
//       </h2>
//       <form onSubmit={onSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Course Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           required
//           className="w-full border px-4 py-2 rounded"
//         />
//         <textarea
//           name="description"
//           placeholder="Course Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           className="w-full border px-4 py-2 rounded"
//         />
//         <div>
//           <label className="block font-semibold mb-1">Course Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleCourseImageChange}
//           />
//           {courseImageUploading && (
//             <p className="text-blue-600 text-sm mt-1">Uploading...</p>
//           )}
//           {courseImage && (
//             <img
//               src={courseImage}
//               alt="Course"
//               className="h-16 w-16 mt-2 rounded object-cover"
//             />
//           )}
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           {editingCourse ? "Update Course" : "Add Course"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CourseForm;

import React from "react";
import toast from "react-hot-toast";

function CourseForm({
  onSubmit,
  form,
  setForm,
  editingCourse,
  courseImage,
  courseImageUploading,
  handleCourseImageChange,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e); // Parent handles toast
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
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter course title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Enter course description"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Course Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCourseImageChange}
          />
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

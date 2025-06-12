import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthProvider";
import { toast } from "react-hot-toast";
import { ChevronLeft } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

function StudentCourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (!user) return;

    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/student/courses/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setCourse(res.data.course);
      } catch (err) {
        console.error("Failed to load course", err);
      }
    };

    const fetchEnrollment = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/student/enrolled`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const enrolled = res.data.courses.some((c) => c._id === id);
        setIsEnrolled(enrolled);
      } catch {
        setIsEnrolled(false);
      }
    };

    fetchCourse();
    fetchEnrollment();
  }, [id, user]);

  const handleEnroll = async () => {
    try {
      await axios.post(
        `${API_URL}/api/student/courses/${id}/enroll`,
        {},
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      setIsEnrolled(true);
      toast.success("You have successfully enrolled in this course!");
    } catch (err) {
      const error = err.response?.data?.error || "Enrollment failed.";
      toast.error(error);
    }
  };

  if (!course)
    return <div className="p-6 text-center">Loading course details...</div>;

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-800">
      {/* Enrolled Badge */}
      {isEnrolled && (
        <div className="absolute top-4 right-4 bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full shadow">
          You are Enrolled!
        </div>
      )}

      {/* Header Section */}
      <div className="bg-gray-100 py-10 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-[#e8f9fb] text-[#23b8d0] hover:bg-[#d3f2f6] px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm mb-6"
          >
            <ChevronLeft size={18} />
            Back
          </button>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mb-6">
            {course.description}
          </p>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg aspect-video max-w-4xl mx-auto">
            {course.image ? (
              <img
                src={course.image}
                alt="Course Thumbnail"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-500">
                <svg
                  className="w-20 h-20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10zM9 8H7v2h2V8zm4 0h-2v2h2V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-2">Course Image/Video Placeholder</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto p-6 sm:p-10 lg:p-12 mt-8">
        {course.sections?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {course.sections.map((section, sectionIndex) => (
              <div
                key={section._id}
                className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-gray-300 mr-4">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-4">
                  {section.topics.map((topic, i) => (
                    <li key={i}>
                      <div className="font-medium text-[#253a59]">
                        {topic.title}
                      </div>
                      {topic.content && (
                        <p className="text-sm text-gray-600 mt-1 ml-4">
                          {topic.content}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 py-10">
            <p>No course content available yet.</p>
          </div>
        )}

        {/* Enrollment Section */}
        {!isEnrolled && (
          <div className="mt-12 text-center">
            <button
              onClick={handleEnroll}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentCourseDetails;

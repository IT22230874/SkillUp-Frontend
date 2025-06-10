import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";

function ActionMenu({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 text-gray-500 hover:text-[#23b8d0] rounded-full hover:bg-gray-100 transition"
        aria-label="Course actions"
      >
        <MoreVertical size={20} />
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-44 origin-top-right rounded-md bg-white border border-gray-200 shadow-xl animate-fade-in">
          <button
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <Pencil size={16} /> Edit Course
          </button>
          <button
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
          >
            <Trash2 size={16} /> Delete Course
          </button>
        </div>
      )}
    </div>
  );
}

export default ActionMenu;

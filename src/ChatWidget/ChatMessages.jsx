import React, { useEffect, useRef } from "react";

export default function ChatMessages({ messages }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  return (
    <div
      ref={ref}
      className="flex-1 overflow-y-auto p-4 space-y-3 text-sm bg-gray-50"
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`p-3 rounded-xl max-w-[80%] shadow-sm ${
            msg.role === "user"
              ? "bg-[#e0f7fc] self-end ml-auto text-right"
              : "bg-white text-gray-800"
          }`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}

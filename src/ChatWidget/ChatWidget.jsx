import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-3">
          <ChatWindow onClose={() => setIsOpen(false)} />
        </div>
      )}

      <button
        className="bg-[#23b8d0] hover:bg-[#1ba6be] text-white p-3 rounded-full shadow-xl transition duration-300 flex items-center justify-center"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={30} />}
      </button>
    </div>
  );
}

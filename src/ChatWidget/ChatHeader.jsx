export default function ChatHeader({ onClose }) {
  return (
    <div className="bg-[#23b8d0] text-white px-4 py-3 flex justify-between items-center rounded-t-xl">
      <h4 className="text-base font-semibold">AI Assistant</h4>
      <button
        onClick={onClose}
        className="text-white text-xl font-bold hover:text-gray-200 transition"
      >
        &times;
      </button>
    </div>
  );
}

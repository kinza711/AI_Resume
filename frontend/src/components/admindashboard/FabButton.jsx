import { MdBolt } from "react-icons/md";

export default function FabButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-800 to-pink-500 shadow-2xl flex items-center justify-center text-white hover:shadow-lg transition-all">
        <MdBolt size={28} />
      </button>
    </div>
  );
}
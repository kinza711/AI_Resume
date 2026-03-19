export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold text-indigo-900">Kinetic Architect</h1>

      <div className="hidden md:flex gap-8">
        {[
          { name: "Home", id: "home" },
          { name: "Features", id: "features" },
          { name: "Pricing", id: "pricing" },
          { name: "About", id: "about" },
        ].map((item) => (
          <a
            key={item.name}
            href={`#${item.id}`}
            className="text-gray-600 hover:text-indigo-900 font-medium transition"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="text-gray-600 hover:text-indigo-900">Login</button>
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-bold">
          Get Started
        </button>
      </div>
    </nav>
  );
}
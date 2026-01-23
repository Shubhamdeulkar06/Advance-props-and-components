import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const sections = [
    { id: "basics", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-violet-400 font-bold text-lg hover:text-violet-300 transition"
          >
            PropsMaster
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                className="flex items-center gap-2 px-4 py-2 rounded-xl
                           text-gray-300 hover:text-white
                           hover:bg-gray-800 transition-all"
              >
                <span className="text-lg">{section.icon}</span>
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white
                       hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-gray-900 border-t border-gray-700 px-4 py-4 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center gap-3 px-4 py-3 rounded-xl
                         text-gray-300 hover:text-white
                         hover:bg-gray-800 transition"
            >
              <span className="text-lg">{section.icon}</span>
              <span className="text-sm font-medium">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

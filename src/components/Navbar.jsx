import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeToggler";

function Navbar() {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "basics", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  const navBg = isDark
    ? "bg-gray-950/80 border-gray-800"
    : "bg-white/80 border-gray-200";

  const itemText = isDark
    ? "text-gray-300 hover:text-white hover:bg-gray-800"
    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100";

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-violet-500 font-extrabold text-lg tracking-wide hover:text-violet-600 transition"
          >
            PropsMaster
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${itemText}`}
              >
                <span className="text-base">{section.icon}</span>
                {section.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition
              ${
                isDark
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
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
        <div
          className={`px-4 py-4 space-y-2 border-t transition-colors
            ${
              isDark
                ? "bg-gray-950 border-gray-800"
                : "bg-white border-gray-200"
            }`}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${itemText}`}
            >
              <span className="text-lg">{section.icon}</span>
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

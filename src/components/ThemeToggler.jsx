import { createContext, useContext, useState } from "react";

/* =========================
   Theme Context
========================= */
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDark: theme === "dark" }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

/* =========================
   Toggle Switch
========================= */
function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-8 rounded-full transition-all duration-300
        ${isDark ? "bg-violet-500" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white
          flex items-center justify-center text-sm
          transition-transform duration-300
          ${isDark ? "translate-x-6" : ""}`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

/* =========================
   Themed Card
========================= */
function ThemedCard({ title, children }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`rounded-2xl p-6 border transition-all
        ${
          isDark
            ? "bg-gray-900/70 border-gray-800 text-gray-200"
            : "bg-white border-gray-200 text-gray-800"
        }`}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

/* =========================
   Themed Button
========================= */
function ThemedButton({ children, variant = "primary", onClick }) {
  const { isDark } = useTheme();

  const styles = {
    primary: isDark
      ? "bg-violet-500 hover:bg-violet-600 text-white"
      : "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: isDark
      ? "bg-gray-700 hover:bg-gray-600 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

/* =========================
   Main Component
========================= */
export default function ThemeToggler() {
  const { isDark } = useTheme();
  const [clicks, setClicks] = useState(0);

  return (
    <section
      className={`rounded-3xl p-8 transition-all
        ${
          isDark
            ? "bg-gray-950 text-white"
            : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Theme Toggler</h2>
          <p className="text-sm text-gray-400">
            Context API + Props (Modern UI)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">
            {isDark ? "Dark" : "Light"}
          </span>
          <ThemeToggleButton />
        </div>
      </div>

      {/* Description */}
      <p className={`mb-8 max-w-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        This example demonstrates how to manage global UI state using the
        Context API while still passing props to reusable components. Toggling
        the theme updates all child components instantly.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ThemedCard title="User Info">
          <p className="text-sm leading-relaxed">
            Name: John Doe <br />
            Role: Frontend Developer <br />
            Status: Active
          </p>

          <div className="flex gap-3 mt-4">
            <ThemedButton
              onClick={() => setClicks(clicks + 1)}
            >
              Edit
            </ThemedButton>
            <ThemedButton
              variant="secondary"
              onClick={() => setClicks(clicks + 1)}
            >
              Settings
            </ThemedButton>
          </div>
        </ThemedCard>

        <ThemedCard title="Stats">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Clicks</span>
              <span className="font-bold text-violet-400">{clicks}</span>
            </div>
            <div className="flex justify-between">
              <span>Theme</span>
              <span className="font-semibold">
                {isDark ? "Dark" : "Light"}
              </span>
            </div>
          </div>
        </ThemedCard>
      </div>

      {/* Learning Note */}
      <div
        className={`rounded-2xl p-5 border-l-4
          ${
            isDark
              ? "bg-gray-900 border-violet-500 text-gray-300"
              : "bg-white border-blue-500 text-gray-700"
          }`}
      >
        <h4 className="font-semibold mb-2">Learning Takeaway</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Context handles global theme state</li>
          <li>Props control component behavior & layout</li>
          <li>Reusable UI adapts automatically to theme</li>
        </ul>
      </div>
    </section>
  );
}

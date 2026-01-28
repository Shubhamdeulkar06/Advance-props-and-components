import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import Navbar from "./components/Navbar";
import RefProps from "./components/RefProps";
import ThemeToggler, {
  ThemeProvider,
  useTheme,
} from "./components/ThemeToggler.jsx";

function AppContent() {
  const { isDark } = useTheme();

  const cardClass = isDark
    ? "bg-gray-900 border border-gray-800"
    : "bg-white border border-gray-200";

  const sectionCard = `
    rounded-2xl p-5 md:p-6
    transition-all duration-300
    hover:border-violet-500/50
    ${cardClass}
  `;

  return (
    <div
      className={`min-h-screen transition-colors duration-300
        ${isDark ? "bg-gray-950" : "bg-gray-100"}
      `}
    >
      <Navbar />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1
            className={`text-3xl md:text-4xl font-extrabold tracking-tight
              ${isDark ? "text-white" : "text-gray-900"}
            `}
          >
            React Props Explained
          </h1>

          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-violet-500" />

          <p
            className={`mt-4 text-base md:text-lg
              ${isDark ? "text-gray-400" : "text-gray-600"}
            `}
          >
            A comprehensive guide to understanding props in React
          </p>
        </header>

        {/* Intro Section */}
        <section className={`rounded-3xl p-6 md:p-8 mb-14 ${cardClass}`}>
          <p
            className={`leading-relaxed text-base md:text-lg
              ${isDark ? "text-gray-300" : "text-gray-700"}
            `}
          >
            Props are one of the core concepts in React. They allow data to be
            passed from parent components to child components, making your UI
            dynamic and reusable.
          </p>
        </section>

        {/* Content Wrapper */}
        <section
          className={`rounded-3xl p-6 md:p-10 transition-colors
            ${
              isDark
                ? "bg-gray-950 border border-gray-800"
                : "bg-gray-50 border border-gray-200"
            }
          `}
        >
          <div className="space-y-12">
            {/* Basic Props */}
            <section
              id="basics"
              className={`${sectionCard} scroll-mt-24 relative`}
            >
              <div className="absolute left-0 top-6 h-8 w-1 rounded-full bg-violet-500" />
              <BasicProps />
            </section>

            {/* Children Props */}
            <section
              id="children"
              className={`${sectionCard} scroll-mt-24 relative`}
            >
              <div className="absolute left-0 top-6 h-8 w-1 rounded-full bg-violet-500" />
              <ChildrenProps />
            </section>

            {/* Complex Props */}
            <section
              id="complex"
              className={`${sectionCard} scroll-mt-24 relative`}
            >
              <div className="absolute left-0 top-6 h-8 w-1 rounded-full bg-violet-500" />
              <ComplexProps />
            </section>

            {/* Ref Props */}
            <section
              id="ref"
              className={`${sectionCard} scroll-mt-24 relative`}
            >
              <div className="absolute left-0 top-6 h-8 w-1 rounded-full bg-violet-500" />
              <RefProps />
            </section>

            {/* Theme */}
            <section
              id="theme"
              className={`${sectionCard} scroll-mt-24 relative`}
            >
              <div className="absolute left-0 top-6 h-8 w-1 rounded-full bg-violet-500" />
              <ThemeToggler />
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`mt-20 border-t transition-colors
          ${isDark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"}
        `}
      >
        <div
          className="max-w-6xl mx-auto px-4 py-8
            flex flex-col md:flex-row
            items-center justify-between gap-4"
        >
          <p
            className={`text-sm text-center md:text-left
              ${isDark ? "text-gray-400" : "text-gray-600"}
            `}
          >
            © {new Date().getFullYear()} PropsMaster. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm">
            {["basics", "children", "complex", "ref", "theme"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize transition
                  ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

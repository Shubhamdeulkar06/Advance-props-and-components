import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import Navbar from "./components/Navbar";
import RefProps from "./components/RefProps";
import ThemeToggler, { ThemeProvider,useTheme } from "./components/ThemeToggler.jsx";

function AppContent() {
  const {isDark} = useTheme();
  const cardClass = isDark
    ? "bg-gray-900 border border-gray-800"
    : "bg-white border border-gray-200";

  const sectionCard = `rounded-2xl p-5 md:p-6 ${cardClass}`;

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-950" : "bg-gray-100"}`}>
      <Navbar />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <header className="mb-8 text-center">
          <h1
            className={`text-3xl md:text-4xl font-extrabold tracking-tight
            ${isDark ? "text-white" : "text-gray-900"}`}
          >
            React Props Explained
          </h1>

          <p
            className={`mt-3 text-base md:text-lg
            ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            A comprehensive guide to understanding props in React
          </p>
        </header>

        {/* Article Card */}
        {/* Intro Section */}
        <section className={`rounded-3xl p-6 md:p-8 mb-14 ${cardClass}`}>
          <p
            className={`leading-relaxed text-base md:text-lg
    ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            Props are one of the core concepts in React. They allow data to be
            passed from parent components to child components, making your UI
            dynamic and reusable.
          </p>
        </section>

        {/* Content Sections */}
        <section
          className={`rounded-3xl p-6 md:p-10
  ${
    isDark
      ? "bg-gray-950 border border-gray-800"
      : "bg-gray-50 border border-gray-200"
  }`}
        >
          <div className="space-y-12">
            <section
              id="basics"
              className={`${sectionCard} scroll-mt-24 relative`}
            >
              <div className="absolute left-0 top-6 h-8 w-1 rounded-full bg-violet-500" />
              <BasicProps />
            </section>

            <section
              id="children"
              className={`${sectionCard} scroll-mt-24 relative`}
            >
              <div className="absolute left-0 top-6 h-8 w-1 rounded-full bg-violet-500" />
              <ChildrenProps />
            </section>

            <section
              id="complex"
              className={`${sectionCard} scroll-mt-24 relative`}
            >
              <div className="absolute left-0 top-6 h-8 w-1 rounded-full bg-violet-500" />
              <ComplexProps />
            </section>

            <section
              id="ref"
              className={`${sectionCard} scroll-mt-24 relative`}
            >
              <div className="absolute left-0 top-6 h-8 w-1 rounded-full bg-violet-500" />
              <RefProps />
            </section>

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
      <footer className="mt-20 border-t border-gray-800 bg-gray-950">
        <div
          className="max-w-6xl mx-auto px-4 py-8
                  flex flex-col md:flex-row
                  items-center justify-between gap-4"
        >
          {/* Left */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} PropMaster. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#basics" className="hover:text-white transition">
              Basics
            </a>
            <a href="#children" className="hover:text-white transition">
              Children
            </a>
            <a href="#complex" className="hover:text-white transition">
              Complex
            </a>
            <a href="#theme" className="hover:text-white transition">
              Theme
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />;
    </ThemeProvider>
  );
}

export default App;

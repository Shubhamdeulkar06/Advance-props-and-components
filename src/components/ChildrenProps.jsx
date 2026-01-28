import React from "react";
import { useTheme } from "./ThemeToggler";

function Card({ children, title, color = "blue" }) {
  const { isDark } = useTheme();

  const colorMap = {
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    red: "border-red-500",
  };

  return (
    <div
      className={`
        rounded-2xl border-l-4 ${colorMap[color]}
        p-6 transition-all
        ${
          isDark
            ? "bg-gray-900 text-gray-300 border border-gray-800 hover:shadow-xl"
            : "bg-white text-gray-700 border border-gray-200 hover:shadow-lg"
        }
      `}
    >
      {title && (
        <h3
          className={`text-lg font-semibold mb-3 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
      )}

      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col gap-6",
    horizontal: "flex flex-wrap gap-6",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  const { isDark } = useTheme();

  return (
    <section className="space-y-6">
      {/* Header */}
      <header>
        <h2
          className={`text-2xl md:text-3xl font-bold mb-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Children Props
        </h2>

        <p
          className={`max-w-xl text-sm md:text-base ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          The{" "}
          <code className="text-violet-500 font-medium">children</code> prop
          allows components to receive and render dynamic JSX content, making
          them flexible and reusable.
        </p>
      </header>

      {/* Cards */}
      <Container layout="grid">
        <Card title="User Profile" color="blue">
          <p>
            <span
              className={`font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Username:
            </span>{" "}
            Shubham Deulkar
          </p>
          <p>
            <span
              className={`font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Email:
            </span>{" "}
            shubham@gmail.com
          </p>
        </Card>

        <Card title="Account Status" color="green">
          <p>
            Status:{" "}
            <span
              className={`font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Active
            </span>
          </p>
          <p>
            Role:{" "}
            <span
              className={`font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Frontend Developer
            </span>
          </p>
        </Card>

        {/* Alert Card */}
        <Card title="System Alert" color="red">
          <p className="font-semibold text-red-500">⚠ Action Required</p>
          <p>
            Your password will expire in{" "}
            <span
              className={`font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              3 days
            </span>
            .
          </p>
          <button
            className={`
              mt-3 px-4 py-2 rounded-lg text-sm font-medium transition
              ${
                isDark
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-red-500 text-white hover:bg-red-600"
              }
            `}
          >
            Update Password
          </button>
        </Card>

        {/* Stats Card */}
        <Card title="Project Stats" color="purple">
          <div className="space-y-1">
            <p>
              🚀 Projects Completed:{" "}
              <span
                className={`font-medium ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                12
              </span>
            </p>
            <p>
              ⏳ Ongoing Projects:{" "}
              <span
                className={`font-medium ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                3
              </span>
            </p>
            <p>
              ⭐ Client Rating:{" "}
              <span
                className={`font-medium ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                4.8 / 5
              </span>
            </p>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default ChildrenProps;

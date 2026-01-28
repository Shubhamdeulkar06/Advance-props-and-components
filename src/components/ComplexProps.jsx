import React, { useState } from "react";
import { useTheme } from "./ThemeToggler";

/* -------------------- User Profile Card -------------------- */
function UserProfileCard({ user, theme, actions }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        rounded-2xl p-6 shadow-md transition hover:shadow-lg
        ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`
            text-3xl w-12 h-12 flex items-center justify-center rounded-full
            ${theme.avatarBg}
          `}
        >
          {user.avatar}
        </div>

        <div>
          <h3
            className={`text-lg font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {user.name}
          </h3>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {user.email}
          </p>
        </div>
      </div>

      {/* Role & Status */}
      <div className="flex gap-2 mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${theme.badgeBg}`}
        >
          {user.role}
        </span>

        <span
          className={`
            px-3 py-1 rounded-full text-xs font-medium
            ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}
          `}
        >
          {user.status}
        </span>
      </div>

      {/* Stats */}
      {user.stats && (
        <div className="grid grid-cols-3 gap-3 mb-5">
          {Object.entries(user.stats).map(([key, value]) => (
            <div
              key={key}
              className={`
                text-center p-3 rounded-xl
                ${isDark ? "bg-gray-800" : "bg-gray-50"}
              `}
            >
              <div
                className={`text-lg font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {value}
              </div>
              <div
                className={`text-xs uppercase tracking-wide ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {key}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {actions && (
        <div className="flex gap-3">
          {actions.primary && (
            <button
              onClick={actions.primary.onClick}
              className={`flex-1 py-2 rounded-xl font-medium transition ${actions.primary.className}`}
            >
              {actions.primary.label}
            </button>
          )}

          {actions.secondary && (
            <button
              onClick={actions.secondary.onClick}
              className={`flex-1 py-2 rounded-xl font-medium transition ${actions.secondary.className}`}
            >
              {actions.secondary.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/* -------------------- Complex Props Demo -------------------- */
function ComplexProps() {
  const { isDark } = useTheme();
  const [message, setMessage] = useState("");

  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: { posts: 145, followers: 2834, following: 421 },
      },
      theme: {
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className:
            "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: { projects: 28, commits: 1523, reviews: 89 },
      },
      theme: {
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className:
            "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
        },
      },
    },
    {
      user: {
        name: "Sarah Williams",
        email: "sarah@example.com",
        avatar: "📊",
        role: "Product Manager",
        status: "Busy",
        stats: { products: 6, launches: 14, stakeholders: 22 },
      },
      theme: {
        avatarBg: "bg-yellow-300",
        badgeBg: "bg-yellow-200",
      },
      actions: {
        primary: {
          label: "View Roadmap",
          onClick: () => setMessage("Viewing Sarah's product roadmap"),
          className: "bg-yellow-500 text-white hover:bg-yellow-600",
        },
        secondary: {
          label: "Schedule Call",
          onClick: () => setMessage("Scheduling call with Sarah"),
          className:
            "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
        },
      },
    },
    {
      user: {
        name: "David Lee",
        email: "david@example.com",
        avatar: "🎨",
        role: "UI/UX Designer",
        status: "Available",
        stats: { designs: 87, prototypes: 34, reviews: 56 },
      },
      theme: {
        avatarBg: "bg-pink-300",
        badgeBg: "bg-pink-200",
      },
      actions: {
        primary: {
          label: "View Portfolio",
          onClick: () => setMessage("Viewing David's portfolio"),
          className: "bg-pink-500 text-white hover:bg-pink-600",
        },
        secondary: {
          label: "Give Feedback",
          onClick: () => setMessage("Giving feedback to David"),
          className:
            "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
        },
      },
    },
  ];

  return (
    <section className="space-y-8">
      {/* Header */}
      <header>
        <h2
          className={`text-2xl md:text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Complex / Nested Props
        </h2>
        <p className={`mt-2 max-w-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Complex props allow passing nested objects and callback functions to
          configure components dynamically and build highly reusable UI.
        </p>
      </header>

      {/* Feedback */}
      {message && (
        <div
          className={`
            p-4 rounded-xl text-sm border
            ${
              isDark
                ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
                : "bg-blue-50 border-blue-300 text-blue-700"
            }
          `}
        >
          {message}
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {users.map((userData, index) => (
          <UserProfileCard key={index} {...userData} />
        ))}
      </div>
    </section>
  );
}

export default ComplexProps;

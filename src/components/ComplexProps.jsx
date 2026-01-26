import React, { useState } from "react";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-md transition hover:shadow-lg
      ${theme.backgroundColor} ${theme.textColor}`}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`text-3xl w-12 h-12 flex items-center justify-center rounded-full ${theme.avatarBg}`}
        >
          {user.avatar}
        </div>

        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-sm opacity-80">{user.email}</p>
        </div>
      </div>

      {/* Role & Status */}
      <div className="flex gap-2 mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${theme.badgeBg}`}
        >
          {user.role}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/60">
          {user.status}
        </span>
      </div>

      {/* Stats */}
      {user.stats && (
        <div className="grid grid-cols-3 gap-3 mb-5">
          {Object.entries(user.stats).map(([key, value]) => (
            <div
              key={key}
              className="text-center p-3 rounded-xl bg-white/70"
            >
              <div className="text-lg font-bold">{value}</div>
              <div className="text-xs uppercase tracking-wide opacity-70">
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
              className={`flex-1 py-2 rounded-xl font-medium transition
              ${actions.primary.className}`}
            >
              {actions.primary.label}
            </button>
          )}
          {actions.secondary && (
            <button
              onClick={actions.secondary.onClick}
              className={`flex-1 py-2 rounded-xl font-medium transition
              ${actions.secondary.className}`}
            >
              {actions.secondary.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}


function ComplexProps() {
  const [message, setMessage] = useState("");
 const users = [
  {
    user: {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "👩‍💼",
      role: "Admin",
      status: "Active",
      stats: {
        posts: 145,
        followers: 2834,
        following: 421,
      },
    },
    theme: {
      backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
      textColor: "text-gray-800",
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
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
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
      stats: {
        projects: 28,
        commits: 1523,
        reviews: 89,
      },
    },
    theme: {
      backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
      textColor: "text-gray-800",
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
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      },
    },
  },

  /* 🆕 User 3: Product Manager */
  {
    user: {
      name: "Sarah Williams",
      email: "sarah@example.com",
      avatar: "📊",
      role: "Product Manager",
      status: "Busy",
      stats: {
        products: 6,
        launches: 14,
        stakeholders: 22,
      },
    },
    theme: {
      backgroundColor: "bg-gradient-to-br from-yellow-100 to-orange-100",
      textColor: "text-gray-800",
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
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      },
    },
  },

  /* 🆕 User 4: UI/UX Designer */
  {
    user: {
      name: "David Lee",
      email: "david@example.com",
      avatar: "🎨",
      role: "UI/UX Designer",
      status: "Available",
      stats: {
        designs: 87,
        prototypes: 34,
        reviews: 56,
      },
    },
    theme: {
      backgroundColor: "bg-gradient-to-br from-pink-100 to-rose-100",
      textColor: "text-gray-800",
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
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      },
    },
  },
];


  return (
    <section className="space-y-8">
      {/* Section Header */}
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">
          Complex / Nested Props
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Complex props allow passing nested objects and callback functions to
          configure components dynamically and build highly reusable UI.
        </p>
      </header>

      {/* Feedback Message */}
      {message && (
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500 text-blue-300">
          {message}
        </div>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {users.map((userData, index) => (
          <UserProfileCard key={index} {...userData} />
        ))}
      </div>
    </section>
  );
}


export default ComplexProps;

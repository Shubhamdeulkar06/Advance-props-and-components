import React from "react";

function Card({ children, title, color = "blue" }) {
  const colorMap = {
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    red: "border-red-500",
  };

  return (
    <div
      className={`rounded-2xl border-l-4 ${colorMap[color]}
      bg-gray-900 p-6 shadow-md hover:shadow-lg transition`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      )}

      <div className="text-gray-300 space-y-1">{children}</div>
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
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-white mb-2">Children Props</h2>
        <p className="text-gray-400 max-w-xl">
          The <code className="text-violet-400">children</code> prop allows
          components to receive and render dynamic JSX content.
        </p>
      </header>

      <Container layout="grid">
        <Card title="User Profile" color="blue">
          <p>
            <span className="font-medium text-white">Username:</span> Shubham
            Deulkar
          </p>
          <p>
            <span className="font-medium text-white">Email:</span>{" "}
            shubham@gmail.com
          </p>
        </Card>

        <Card title="Account Status" color="green">
          <p>Status: Active</p>
          <p>Role: Frontend Developer</p>
        </Card>

        {/* 🆕 Card 3: Notification / Alert Use Case */}
        <Card title="System Alert" color="red">
          <p className="font-semibold text-red-400">⚠ Action Required</p>
          <p>
            Your password will expire in{" "}
            <span className="font-medium text-white">3 days</span>.
          </p>
          <button className="mt-3 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
            Update Password
          </button>
        </Card>

        {/* 🆕 Card 4: Stats / Dashboard Use Case */}
        <Card title="Project Stats" color="purple">
          <div className="space-y-1">
            <p>
              🚀 Projects Completed:{" "}
              <span className="font-medium text-white">12</span>
            </p>
            <p>
              ⏳ Ongoing Projects:{" "}
              <span className="font-medium text-white">3</span>
            </p>
            <p>
              ⭐ Client Rating:{" "}
              <span className="font-medium text-white">4.8/5</span>
            </p>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default ChildrenProps;

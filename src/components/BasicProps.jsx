import React, { useState } from "react";
import { useTheme } from "./ThemeToggler";

/* =========================
   Reusable Button Component
========================= */
export function Button({
  text,
  color = "primary",
  size = "medium",
  onClick,
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      className={`
        rounded-xl font-medium transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-violet-400

        ${size === "small" && "px-3 py-1.5 text-sm"}
        ${size === "medium" && "px-4 py-2 text-sm"}
        ${size === "large" && "px-6 py-3 text-lg"}

        ${color === "primary" && "bg-violet-600 text-white hover:bg-violet-700"}
        ${color === "secondary" && "bg-gray-600 text-white hover:bg-gray-700"}
        ${color === "danger" && "bg-red-500 text-white hover:bg-red-600"}
        ${color === "success" && "bg-green-500 text-white hover:bg-green-600"}

        ${disabled && "opacity-50 cursor-not-allowed hover:bg-opacity-50"}
      `}
    >
      {text}
    </button>
  );
}

/* =========================
   Basic Props Example
========================= */
function BasicProps() {
  const { isDark } = useTheme();
  const [clickCount, setClickCount] = useState(0);

  const cardClasses =
    "p-6 rounded-2xl border transition-colors " +
    (isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200");

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <h2
          className={`text-2xl md:text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Basic Props
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
          Props (short for{" "}
          <span className="text-violet-500 font-medium">properties</span>) are
          how React components receive data from their parent components. In
          this example, the{" "}
          <code className="text-violet-500 font-medium">Button</code> component
          receives different props like{" "}
          <code className="text-violet-500">text</code>,{" "}
          <code className="text-violet-500">color</code>,{" "}
          <code className="text-violet-500">size</code>,{" "}
          <code className="text-violet-500">onClick</code>, and{" "}
          <code className="text-violet-500">disabled</code> to control its
          appearance and behavior.
        </p>
      </header>

      {/* Color Variants */}
      <div className={`${cardClasses} flex flex-wrap gap-4`}>
        <Button
          text="Primary"
          color="primary"
          onClick={() => setClickCount(clickCount + 1)}
        />
        <Button
          text="Secondary"
          color="secondary"
          onClick={() => setClickCount(clickCount + 1)}
        />
        <Button
          text="Danger"
          color="danger"
          onClick={() => setClickCount(clickCount + 1)}
        />
        <Button
          text="Success"
          color="success"
          onClick={() => setClickCount(clickCount + 1)}
        />
      </div>

      {/* Size Variants */}
      <div className={`${cardClasses} flex flex-wrap items-center gap-4`}>
        <Button
          text="Small"
          size="small"
          onClick={() => setClickCount(clickCount + 1)}
        />
        <Button
          text="Medium (Default)"
          onClick={() => setClickCount(clickCount + 1)}
        />
        <Button
          text="Large"
          size="large"
          onClick={() => setClickCount(clickCount + 1)}
        />
      </div>

      {/* Disabled State */}
      <div className={`${cardClasses} flex flex-wrap gap-4`}>
        <Button text="Enabled" onClick={() => setClickCount(clickCount + 1)} />
        <Button text="Disabled" disabled />
      </div>

      {/* Counter */}
      <div
        className={`${cardClasses} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}
      >
        <h3 className="text-gray-700 dark:text-gray-300 font-medium">
          Total Clicks
        </h3>

        <div className="flex items-center gap-4">
          <span className="bg-violet-600 text-white font-bold px-4 py-2 rounded-xl shadow">
            {clickCount}
          </span>

          <Button
            text="Reset"
            color="danger"
            onClick={() => setClickCount(0)}
          />
        </div>
      </div>
    </div>
  );
}

export default BasicProps;

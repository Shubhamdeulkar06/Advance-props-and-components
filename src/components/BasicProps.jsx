import React, { useState } from "react";

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

        ${color === "primary" && "bg-blue-500 text-white hover:bg-blue-600"}
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

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="space-y-6">
      {/* Buttons Card */}
      <div className="flex flex-wrap gap-4 p-6 rounded-2xl bg-gray-900 border border-gray-800">
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
      <div className="flex items-center flex-wrap gap-4 p-6 rounded-2xl bg-gray-900 border border-gray-800">
        <span>
          <Button
            text="Small"
            size="small"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </span>
        <span>
          <Button
            text="Medium Button (default)"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </span>
        <span>
          <Button
            text="Large Button"
            color="primary"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </span>
      </div>
      <div className="flex flex-wrap gap-4 p-6 rounded-2xl bg-gray-900 border border-gray-800">
        <Button
          text="Enabled"
          color="primary"
          onClick={() => setClickCount(clickCount + 1)}
        />

        <Button text="Disabled" color="primary" disabled />
      </div>

      {/* Counter Card */}
      <div className="flex items-center justify-between p-5 rounded-2xl bg-gray-900 border border-gray-800">
        <h3 className="text-gray-300 text-base font-medium">Total Clicks</h3>
        <div className="flex gap-4">
          <span className="bg-violet-500 text-white text-md font-bold px-4 py-2 rounded-xl shadow-md">
            {clickCount}
          </span>
          <span>
            <Button
              text="Reset"
              color="danger"
              onClick={() => setClickCount(0)}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BasicProps;

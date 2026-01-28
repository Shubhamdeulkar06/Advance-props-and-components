import { useRef, useState, forwardRef } from "react";
import { useTheme } from "./ThemeToggler";

/* -------------------- Custom Input -------------------- */
const CustomInput = forwardRef(({ label, placeholder }, ref) => {
  const { isDark } = useTheme();

  return (
    <div className="mb-4">
      <label
        className={`block text-sm font-medium mb-2 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {label}
      </label>

      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 rounded-xl transition
          focus:outline-none focus:ring-2 focus:ring-violet-500
          ${
            isDark
              ? "bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500"
              : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400"
          }
        `}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

/* -------------------- Ref Props -------------------- */
function RefProps() {
  const { isDark } = useTheme();
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);
  const [message, setMessage] = useState("");

  const focusFirstInput = () => {
    inputRef.current?.focus();
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  const getInputValue = () => {
    const value = inputRef.current?.value;

    if (!value) {
      setMessage("⚠️ First input is empty");
      return;
    }

    setMessage(`✅ First input value: ${value}`);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      setMessage("🧹 First input cleared");
    }
  };

  return (
    <section
      className={`
        p-6 md:p-8 rounded-2xl space-y-6
        ${
          isDark
            ? "bg-gray-900 border border-gray-800"
            : "bg-white border border-gray-200"
        }
      `}
    >
      {/* Heading */}
      <div>
        <h2
          className={`text-2xl md:text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Ref Props
        </h2>

        <p
          className={`mt-2 max-w-xl text-sm md:text-base ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Ref props allow parent components to directly access DOM elements
          inside child components using{" "}
          <code className="text-violet-500 font-medium">forwardRef</code>.
          This is useful for focus management, reading values, and imperative
          actions.
        </p>
      </div>

      {/* Feedback Message */}
      {message && (
        <div
          className={`
            p-4 rounded-xl text-sm border
            ${
              isDark
                ? "bg-violet-500/10 border-violet-500/30 text-violet-300"
                : "bg-violet-50 border-violet-300 text-violet-700"
            }
          `}
        >
          {message}
        </div>
      )}

      {/* Inputs */}
      <div className="max-w-md">
        <CustomInput
          ref={inputRef}
          label="First Input (with ref)"
          placeholder="Type something..."
        />
        <CustomInput
          ref={secondInputRef}
          label="Second Input (with ref)"
          placeholder="Type something else..."
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={focusFirstInput}
          className={`
            px-4 py-2 rounded-xl font-medium transition
            ${
              isDark
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }
          `}
        >
          Focus First Input
        </button>

        <button
          onClick={focusSecondInput}
          className={`
            px-4 py-2 rounded-xl font-medium transition
            ${
              isDark
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }
          `}
        >
          Focus Second Input
        </button>

        <button
          onClick={getInputValue}
          className={`
            px-4 py-2 rounded-xl font-medium transition
            ${
              isDark
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-green-500 text-white hover:bg-green-600"
            }
          `}
        >
          Get First Input Value
        </button>

        <button
          onClick={clearInput}
          className={`
            px-4 py-2 rounded-xl font-medium transition
            ${
              isDark
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-red-500 text-white hover:bg-red-600"
            }
          `}
        >
          Clear First Input
        </button>
      </div>
    </section>
  );
}

export default RefProps;

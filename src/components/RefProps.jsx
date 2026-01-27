import { useRef, useState, forwardRef } from "react";

/* -------------------- Custom Input -------------------- */
const CustomInput = forwardRef(({ label, placeholder }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="
          w-full px-4 py-2 rounded-xl
          bg-gray-800 border border-gray-700
          text-gray-100 placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-violet-500
        "
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

/* -------------------- Ref Props -------------------- */
function RefProps() {
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
    <section className="p-8 rounded-2xl bg-gray-900 border border-gray-800 space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-white">Ref Props</h2>
        <p className="text-gray-400 mt-2 max-w-xl">
          Ref props allow parent components to directly access DOM elements
          inside child components using <code className="text-violet-400">forwardRef</code>.
          This is useful for focus management, reading values, and imperative actions.
        </p>
      </div>

      {/* Feedback Message */}
      {message && (
        <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm">
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
          className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Focus First Input
        </button>

        <button
          onClick={focusSecondInput}
          className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Focus Second Input
        </button>

        <button
          onClick={getInputValue}
          className="px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition"
        >
          Get First Input Value
        </button>

        <button
          onClick={clearInput}
          className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
        >
          Clear First Input
        </button>
      </div>
    </section>
  );
}

export default RefProps;

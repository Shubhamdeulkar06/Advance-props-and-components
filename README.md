# PropsMaster 🚀

PropsMaster is a learning-focused React project built with **React + Vite + Tailwind CSS**. The goal of this project is to **understand React props deeply** through practical, reusable UI examples.

---

## 🛠 Tech Stack

* ⚛️ React (with Hooks)
* ⚡ Vite (Fast dev server & build)
* 🎨 Tailwind CSS (Utility-first styling)
* 🔀 React Router DOM (Routing)

---

## 📦 Prerequisites

Make sure you have the following installed:

* **Node.js** (v18 or later recommended)
* **npm** or **yarn**

Check versions:

```bash
node -v
npm -v
```

---

## 🚀 Project Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd propsmaster
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

The app will be available at:

👉 `https://propsmaster.netlify.app/`

---

## 🧭 Project Structure

```
src/
│── components/        # Reusable UI components
│── sections/          # Props examples (Basic, Children, Complex, Ref)
│── pages/             # Page-level components
│── layout/            # Navbar, Footer, Layout wrappers
│── App.jsx            # App routes
│── main.jsx           # App entry point
│── index.css          # Tailwind styles
```

---

## 🔀 Routing Setup (React Router)

This project uses **react-router-dom** for navigation.

### Installed Package

```bash
npm install react-router-dom
```

### main.jsx Setup

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

## 📚 Learning Sections Included

Each section focuses on a different props concept:

* ✅ **Basic Props** – Passing simple data
* 👶 **Children Props** – Using `props.children`
* 🧩 **Complex Props** – Objects & arrays as props
* 🔗 **Ref Props** – Forwarding refs
* 🎨 **Theme Toggler** – Props + state combination

---

## 🧠 How to Use This Project

1. Start the dev server
2. Navigate through sections using the navbar
3. Read the code alongside UI output
4. Modify props and see real-time changes
5. Try creating your own props examples

---

## 🎯 Learning Goals

* Understand **data flow in React**
* Write **reusable components**
* Improve **component design thinking**
* Practice **clean UI structuring**

---

## 🧪 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 🌟 Future Improvements

* Add props validation with PropTypes
* Add TypeScript version
* Add animations with Framer Motion
* Add unit tests

---

## 🤝 Contribution

This is a learning project, but feel free to fork and experiment.

---

## 🧑‍💻 Author

**Shubham Deulkar**

Happy learning & keep mastering React props! 💜

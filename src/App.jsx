import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contacts = lazy(() => import("./components/Contacts"));

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="mx-auto">
      <div className="w-full text-center p-5 bg-blue-600">
        <Link to="/" className="text-black p-2 rounded-xl hover:bg-blue-800 transition-all duration-500">
          Home
        </Link>
        <Link to="/about" className="text-black p-2 rounded-xl hover:bg-blue-800 transition-all duration-500">
          About
        </Link>
        <Link to="/contacts" className="text-black p-2 rounded-xl hover:bg-blue-800 transition-all duration-500">
          Contacts
        </Link>
        
        <select
          value={theme}
          onChange={toggleTheme}
          className="text-black p-2 rounded-xl ml-4"
        >
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

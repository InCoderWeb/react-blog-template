import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Post } from "./Components/Post";
import { Footer } from "./Components/Footer";
import { Error404 } from "./Components/Error404";
import { TextEditor } from "./Components/TextEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector("body").classList.add("darkMode");
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector("body").classList.remove("darkMode");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar handleThemeToggle={handleThemeToggle} currentTheme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/editor" element={<TextEditor />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

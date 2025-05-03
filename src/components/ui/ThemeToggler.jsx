import { useEffect, useState } from "react";

const LIGHT_THEME = "shadcn";
const DARK_THEME = "black";

function ThemeToggler() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || LIGHT_THEME;
    }
    return LIGHT_THEME;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
  };

  return (
    <button className="btn btn-sm btn-primary" onClick={toggleTheme}>
      Переключить тему ({theme === LIGHT_THEME ? "тёмная" : "светлая"})
    </button>
  );
}

export default ThemeToggler;

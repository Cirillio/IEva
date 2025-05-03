import { useEffect, useState } from "react";
import { Icon } from "@/icons";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
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
    <button
      className="btn btn-lg aspect-square btn-text btn-circle flex items-center gap-2 p-0"
      onClick={toggleTheme}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          <Icon name={theme === LIGHT_THEME ? "moon" : "sun"} size={24} />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggler;

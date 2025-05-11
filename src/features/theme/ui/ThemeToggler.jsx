import { useEffect } from "react";
import { Icon } from "@/shared/ui/Icon";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { toggleTheme } from "../model/slice";
import { LIGHT_THEME } from "../model/constants";
import { selectTheme } from "../model/selectors";

export function ThemeToggler() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="btn btn-lg aspect-square btn-text btn-circle flex items-center gap-2 p-0"
      onClick={() => dispatch(toggleTheme())}
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

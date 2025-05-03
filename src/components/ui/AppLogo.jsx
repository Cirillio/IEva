import { useEffect, useState } from "react";
const LIGHT_THEME = "shadcn";
const DARK_THEME = "black";
const LIGHT_LOGO = "/public/logo/logo_light.svg";
const DARK_LOGO = "/public/logo/logo_black.svg";

export default function AppLogo() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || LIGHT_THEME;
    }
    return LIGHT_THEME;
  });

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || LIGHT_THEME);
  }, []);

  return (
    <a
      href="/"
      className={
        "max-w-10 cursor-pointer aspect-square active:scale-98 hover:opacity-90 transition-all drop-shadow-sm drop-shadow-black"
      }
    >
      <img
        src={theme === LIGHT_THEME ? LIGHT_LOGO : DARK_LOGO}
        className="w-full h-full object-cover select-none pointer-events-none"
        alt="logo"
      />
    </a>
  );
}

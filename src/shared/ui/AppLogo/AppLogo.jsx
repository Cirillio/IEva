import { useAppSelector } from "@/app/hooks";
import { LIGHT_THEME } from "@/features/theme/model/constants";
import { Link } from "react-router-dom";

const LIGHT_LOGO = "/logo/logo_light.svg";
const DARK_LOGO = "/logo/logo_black.svg";

export function AppLogo() {
  const theme = useAppSelector((state) => state.theme.value);
  const src = theme === LIGHT_THEME ? LIGHT_LOGO : DARK_LOGO;

  return (
    <Link
      to="/"
      className={
        "max-w-11 w-full cursor-pointer aspect-square active:scale-98 hover:opacity-90 transition-all drop-shadow-md drop-shadow-neutral/40"
      }
    >
      <img
        src={src}
        className="w-full h-full object-cover select-none pointer-events-none"
        alt="logo"
      />
    </Link>
  );
}

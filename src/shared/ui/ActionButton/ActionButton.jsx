import { Link } from "react-router-dom";
import { Icon } from "@/shared/ui/Icon";

export function ActionButton({ to, action, icon }) {
  return (
    <Link
      to={to}
      onClick={() => action()}
      className="btn btn-sm p-1 h-fit w-fit btn-circle btn-soft"
    >
      <Icon size="24" name={icon} />
    </Link>
  );
}

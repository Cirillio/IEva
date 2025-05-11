import { Icon } from "@/shared/ui/Icon";
import { Link } from "react-router-dom";

export function MenuButton({ to, title, icon, alert }) {
  return (
    <Link
      to={"/" + to}
      className="btn md:btn-lg btn-md btn-text rounded-full max-w-fit aspect-square xl:aspect-auto p-0 px-4"
    >
      <div className="indicator">
        <Icon name={icon} size="28" />

        {alert && (
          <span className="indicator-item indicator-top indicator-end badge  badge-info rounded-full px-1">
            <span className="">
              {String(alert).length > 3 ? "999+" : alert}
            </span>
          </span>
        )}
      </div>
      <span className="mx-4 xl:flex min-[100px]:hidden">{title}</span>
    </Link>
  );
}

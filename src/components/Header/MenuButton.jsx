import { Icon } from "@/icons";

const MenuButton = ({ url, title, icon, alert }) => (
  <>
    <a
      href={"/" + url}
      className="btn btn-lg btn-text rounded-full max-w-fit aspect-square xl:aspect-auto p-0 xl:px-4"
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
    </a>
  </>
);

export default MenuButton;

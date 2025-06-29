import { MenuButton } from "./MenuButton";

export function SideMenu({ buttons }) {
  return (
    <div className="flex w-fit flex-col gap-2 mx-auto xl:mx-0">
      {buttons.map((button, index) => (
        <MenuButton
          key={index}
          title={button.title}
          icon={button.icon}
          to={button.to}
          alert={button.alert}
        />
      ))}
    </div>
  );
}

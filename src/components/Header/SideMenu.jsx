import MenuButton from "./MenuButton";

const SideMenu = ({ buttons }) => (
  <div className="flex flex-col items-center xl:items-start gap-2 ">
    {buttons.map((button, index) => (
      <MenuButton
        key={index}
        title={button.title}
        icon={button.icon}
        url={button.url}
        alert={button.alert}
      />
    ))}
  </div>
);

export default SideMenu;

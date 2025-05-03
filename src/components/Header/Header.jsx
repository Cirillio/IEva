import AppLogo from "../ui/AppLogo";
import UserButton from "./UserButton";
import SideMenu from "./SideMenu";
import ThemeToggler from "../ui/ThemeToggler";

const menuButtons = [
  { title: "Главная", url: "", icon: "home" },
  { title: "Сообщения", url: "", icon: "message", alert: 121112 },
  { title: "Уведомления", url: "", icon: "bell", alert: 38 },
  { title: "Сообщества", url: "", icon: "users" },
  { title: "Закладки", url: "", icon: "bookmark" },
];

const Header = () => (
  <>
    <header className="min-h-full w-fit bg-base-100 flex gap-4 flex-col p-1 lg:p-2">
      <div className="flex flex-col xl:flex-row w-full xl:items-center items-center gap-2 justify-between">
        <AppLogo size={24} />
        <ThemeToggler />
      </div>
      <UserButton
        name={"Cirillio"}
        username={"imcirillio"}
        avatar={"av1.png"}
      />
      <SideMenu buttons={menuButtons} />
    </header>
  </>
);

export default Header;

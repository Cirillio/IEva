import { AppLogo } from "@/shared/ui/AppLogo";
import { SelfPanel } from "./SelfPanel";
import { SideMenu } from "./SideMenu";
import { ThemeToggler } from "@/features/theme";

const menuButtons = [
  { title: "Главная", to: "news", icon: "home" },
  { title: "Сообщения", to: "messanger", icon: "message", alert: 121112 },
  { title: "Уведомления", to: "notifications", icon: "bell", alert: 38 },
  { title: "Сообщества", to: "communities", icon: "users" },
  { title: "Закладки", to: "bookmarks", icon: "bookmark" },
];

export function Sidebar() {
  return (
    <aside className="min-h-full border-r-2 border-neutral-200/30 w-fit bg-base-100 flex gap-4 flex-col  p-1 sm:p-2">
      <div className="flex flex-col xl:flex-row w-full items-center gap-2 justify-between">
        <AppLogo size={24} />
        <ThemeToggler />
      </div>
      <SelfPanel name={"Cirillio"} username={"imcirillio"} avatar={"av1.png"} />
      <SideMenu buttons={menuButtons} />
    </aside>
  );
}

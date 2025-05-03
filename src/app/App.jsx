import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import ThemeToggler from "../components/ui/ThemeToggler";
import "./app.css";
import appLogo from "../../public/logo/logo_black.svg";

async function loadFlyonUI() {
  return import("flyonui/flyonui");
}

function App() {
  const location = useLocation();

  // Загрузка FlyonUI при монтировании компонента
  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };
    initFlyonUI();
  }, []);

  // Переинициализация FlyonUI при смене маршрута
  useEffect(() => {
    setTimeout(() => {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [location.pathname]);

  return (
    <>
      <Icon icon="mynaui:annoyed-ghost" width="24" height="24" />
      <h1>It works!</h1>
      <button className="btn btn-accent">Test me</button>
      <ThemeToggler />
      <img src={appLogo} alt="App Logo" className="border" />
    </>
  );
}

export default App;

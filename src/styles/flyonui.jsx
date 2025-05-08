import { useEffect } from "react";
import { useLocation } from "react-router-dom";
async function loadFlyonUI() {
  return import("flyonui/flyonui");
}
function FlyonUI() {
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
}

export default FlyonUI;

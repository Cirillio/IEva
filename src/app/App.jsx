import { Routes, Route } from "react-router-dom";
import "@/styles/app.css";
import "@/styles/global.css";
import FlyonUI from "../styles/flyonui";
import { Sidebar } from "@/widgets/sidebar";
import { MessangerPage, ProfilePage } from "../pages";
function App() {
  FlyonUI();
  return (
    <div className="flex h-dvh flex-1 sm:gap-2 justify-center">
      <Sidebar />
      <main className="flex min-h-full z-0 flex-col max-w-[848px] flex-1">
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messanger/:user_id" element={<MessangerPage />} />
          <Route path="/messanger" element={<MessangerPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

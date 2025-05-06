import FlyonUI from "../styles/flyonui";
import Header from "../components/Header/Header";
import ProfilePage from "../features/profile/ProfilePage";
import { MessangerPage } from "../features/chat/MessangerPage";
import "@/styles/app.css";
import { Routes, Route } from "react-router-dom";

function App() {
  FlyonUI();
  return (
    <>
      <div className="flex h-dvh flex-1 justify-center">
        <Header />
        <main className="flex min-h-full flex-col max-w-[736px] flex-1">
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/messanger/:user_id" element={<MessangerPage />} />
            <Route path="/messanger" element={<MessangerPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;

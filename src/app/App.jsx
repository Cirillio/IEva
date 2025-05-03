import FlyonUI from "../styles/flyonui";
import Header from "../components/Header/Header";
import ProfilePage from "../features/profile/ProfilePage";
import "@/styles/app.css";

function App() {
  FlyonUI();
  return (
    <>
      <div className="flex h-dvh flex-1 justify-center">
        <Header />
        <main className="flex min-h-full flex-col max-w-[736px] flex-1">
          <ProfilePage />
        </main>
      </div>
    </>
  );
}

export default App;

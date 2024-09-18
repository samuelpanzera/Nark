import { Switch } from "@/components/ui/switch";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="bg-slate-500 dark:bg-black h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1">
          <Header />
          <Switch id="airplane-mode" />
          <span className="text-white ml-4">Airplane mode</span>
        </main>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;

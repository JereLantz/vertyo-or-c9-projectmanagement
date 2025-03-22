import NewProject from "./components/NewProject";
import NoProjSel from "./components/NoProjSel";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NoProjSel />
    </main>
  );
}

export default App;

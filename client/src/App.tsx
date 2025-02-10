import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Formations from "./pages/Formations/Formations";
import HardSkills from "./pages/HardSkills/HardSkills";
import Presentation from "./pages/Presentation/Presentation";

function App() {
  return (
    <>
      <NavBar />
      <Presentation />
      <HardSkills />
      <Formations />
    </>
  );
}

export default App;

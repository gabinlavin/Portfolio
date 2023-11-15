import About from "./Components/About";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import NavBar from "./Components/NavBar";
import { Projects } from "./Components/Projects";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;

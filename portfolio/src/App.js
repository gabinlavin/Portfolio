import About from "./Components/About";
import Contact from "./Components/Contact"
import Experience from "./Components/Experience";
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
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;

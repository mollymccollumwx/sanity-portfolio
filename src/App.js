// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/Navbar";

function App() {
  return (
  <>
  <NavBar />
  <Home />
  <About/>
  <Project/>
  </>
  )
}

export default App;

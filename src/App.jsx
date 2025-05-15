import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Router>
  );
}

export default App;

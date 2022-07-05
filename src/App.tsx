import About from "./components/About/About";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import "./app.css";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  );
}

export default App;

// dark:bg-[#141414]
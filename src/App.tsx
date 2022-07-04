import About from "./components/About/About";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";


function App() {
  return (
    <div className="h-max w-[100%] bg-white p-0 m-0">
      <Header/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;

// dark:bg-[#141414]
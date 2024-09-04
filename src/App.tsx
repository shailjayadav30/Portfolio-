import "./App.css";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Skills from "./Routes/Skills";
import Footer from "./Routes/Footer";
function App() {
  return (
    <div className='flex flex-col  dark:text-white"'>
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

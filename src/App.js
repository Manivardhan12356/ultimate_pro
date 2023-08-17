import './App.css'
import ContactUs from './components/contact/ContactUs';

import Experience from './components/experience/Experience';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from './components/project/Projects';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <ContactUs />
      {/* <Navbar/> */}
    </div>
  );
}

export default App;

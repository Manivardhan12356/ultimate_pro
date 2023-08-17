import './App.css'
import ContactUs from './components/contact/ContactUs';

import Experience from './components/experience/Experience';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from './components/project/Projects';
import Skills from './components/skills/Skills';
// import resume from '../../assets/image/cv_mani_vardhan.pdf'



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

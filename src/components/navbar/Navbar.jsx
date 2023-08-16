
import './navbar.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'


const Navbar = () => {
   return (
      <nav className='nav_main' data-aos="fade-down" data-aos-duration="1000">
         <div className="nav_container">
            <div className='logo' data-aos="fade-left" data-aos-duration="1000">
               <span className='opacity-90 text-2xl font-semibold'>Mani vardhan</span>
            </div>
            <div className='social_links' data-aos="fade-right" data-aos-duration="1000">
               <a href="https://github.com/Manivardhan12356" ><BsGithub className='links'/></a>
               <a href="https://www.linkedin.com/in/mani-vardhan-4689151b1/"><BsLinkedin className='links'/></a>
               <a href="https://twitter.com/manivardhan123"><AiFillTwitterCircle className='links1'/></a>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;

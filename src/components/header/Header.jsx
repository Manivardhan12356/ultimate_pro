import React from 'react'
import './header.css'
import mani from '../../assets/mani.jpg'

const Header = () => {
   return (
      <>
      <section className="header_main" >
         <div className="header_container" >
            <div className="header_content" data-aos="fade-left" data-aos-duration="1000">
               <h1 className='heading'>
                  Hii,Nice to meet you. 
                  <p className='block'>
                      I'm <span className=''>Mani Vardhan</span>
                  </p>

               </h1>
               <p className='header_details'>
                  Based in the India, I'm a front-end developer
                  passionate about building accessible web apps
                  that users love.
               </p>

               <a href="" className='header_CONATCT'>
                  CONTACT ME
               </a>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
               <img className="header_image" src={mani} alt="profileimg" />
            </div>
        </div>
         </section>
        
      </>
   )
}

export default Header

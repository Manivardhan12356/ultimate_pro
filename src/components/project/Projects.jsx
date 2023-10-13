import React from 'react'
import './projects.css'
import { ecomerrce,provad, togglehead } from '../../assets'

const Projects = () => {
  return (
    <div className='project_main'>
        <section className='projects' data-aos="fade-up" data-aos-duration="1000">
           <h2 className='project_heading'>Projects</h2>
           <div className="project_grid">
              <div className="Project_Card">
                 <div className="project_card_main">
                    <img src={togglehead} alt="projectimage" />
                    <h3>Togglehead assigment</h3>
                    <div className="techs">
                       <span>HTML</span>
                       <span>CSS</span>
                       <span>React js</span>
                       <span>Swiper JS</span>
                    </div>
                    <div className="website_and_code">
                       <a href='https://sage-profiterole-29bd87.netlify.app/'>VIEW PROJECT</a>
                       <a href='https://github.com/Manivardhan12356/togglehead-in.git'>VIEW CODE</a>
                    </div>
                 </div>
              </div>
              <div className="Project_Card">
                 <div className="project_card_main">
                    <img src={provad} alt="projectimage" />
                    <h3>Provad assigment</h3>
                    <div className="techs">
                       <span>HTML</span>
                       <span>CSS</span>
                       <span>Javascript</span>
                    </div>
                    <div className="website_and_code">
                       <a href='https://monumental-choux-84e15d.netlify.app/'>VIEW PROJECT</a>
                       <a>VIEW CODE</a>
                    </div>
                 </div>
              </div>
              <div className="Project_Card">
                 <div className="project_card_main">
                    <img src={ecomerrce} alt="projectimage" />
                    <h3>Ecommerce website UI</h3>
                    <div className="techs">
                       <span>HTML</span>
                       <span>CSS</span>
                       <span>Javascript</span>
                    </div>
                    <div className="website_and_code">
                       <a href='https://nimble-alfajores-d4914d.netlify.app/'>VIEW PROJECT</a>
                       <a>VIEW CODE</a>
                    </div>
                 </div>
              </div>
           </div>
        </section>
    </div>
  )
}

export default Projects

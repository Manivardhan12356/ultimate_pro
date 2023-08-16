import React from 'react'
import './skills.css'
import { css, git, html, javascript, node, programmer, react, redux, typescript } from '../../assets'

const Skills = () => {
  return (
     <>      
        <h2 className='skills_heading'>Skills</h2>
      <skills>
           <section className='skills_container' data-aos="fade-up" data-aos-duration="1000">
              <div className="skills_main">
                 <div className="skill">
                    <div className="skill_list">
                       <img src={html} alt="html" />
                       <span>HTML</span>
                    </div>
                    <p>1 . 5 years experience</p>
                 </div>
                 <div className="skill">
                    <div className="skill_list">
                       <img src={css} alt="css" />
                       <span>CSS</span>
                    </div>
                    <p>1 . 5 years experience</p>
                 </div>
                 <div className="skill">
                    <div className="skill_list">
                       <img src={javascript} alt="javascript" />
                       <span>javascript</span>
                    </div>
                    <p>1 year experience</p>
                 </div>
                 <div className="skill">
                    <div className="skill_list">
                       <img src={react} alt="react" />
                       <span>React</span>
                    </div>
                    <p>1 year experience</p>
                 </div>
                 <div className="skill">
                    <div className="skill_list">
                       <img src={redux} alt="redux" />
                       <span>Redux</span>
                    </div>
                    <p>1 year experience</p>
                 </div>
                 <div className="skill">
                    <div className="skill_list">
                       <img src={node} alt="node" />
                       <span>Node</span>
                    </div>
                    <p>8 months experience</p>
                 </div>
                 <div className="skill">
                    <div className="skill_list">
                       <img src={typescript} alt="typescript" />
                       <span>Typescript</span>
                    </div>
                    <p>5 months experience</p>
                 </div>
                 <div className="skill">
                    <div className="skill_list">
                       <img src={git} alt="git" />
                       <span>Git</span>
                    </div>
                    <p>1 . 5 years experience</p>
                 </div>
                 <div className="skill last-item">
                    <div className="skill_list">
                       <img src={programmer} alt="prompt engineering" />
                       <span>Prompt Engineering</span>
                    </div>
                    <p>1 . 5 years experience</p>
                 </div>
              </div>
           </section> 
      </skills>
    </>
  )
}

export default Skills

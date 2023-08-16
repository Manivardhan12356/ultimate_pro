
import './experience.css'
// import { programmer } from '../../assets'
import Accordion from '../Accordin/Accordin'



const Experience = () => {

  return (
    <div>
        <h2 className='exp_heading'>Experience</h2>
        <section className='experience' data-aos="fade-down" data-aos-duration="1000">
           <div>
              <Accordion
                 title="Togglehead.in"
                 role="Frontend Developer"
                 date="Jun 2023 - Jul 2023"
                 content1="Developed and enhanced the user interface (UI) of the 'Multimetals and snapit'
                  projects, utilizing React.js,Bootstrap, CSS, Node.js."
                 content2=" Collaborated with cross-functional teams to implement responsive designs, optimize
                  website performance, and ensure a seamless user experience"
              />
              <Accordion
                 title="Cactus communications
"
                 role="Software developer"
                 date="Aug 2022 - Jan 2023"
                 content1="Developed and enhanced the user interface (UI) of the 'Editage platform', utilizing
React.js, Angular, Tailwind Css,Strapi , CSS, Node.js.
"
                 content2=" Collaborated with cross-functional teams to implement responsive designs, optimize
                  website performance, and ensure a seamless user experience"
              />
              <Accordion
                 title="Freelancer
"
                 role="Software developer"
                 date="Dec 2021 - Mar 2022"
                 content1="Developed and enhanced the user interface (UI) of the 
                  projects, utilizing React.js,Bootstrap, CSS, Node.js."
                 content2=" Collaborated with cross-functional teams to implement responsive designs, optimize
                  website performance, and ensure a seamless user experience"
              />
           </div>
        </section>
    </div>
  )
}

export default Experience

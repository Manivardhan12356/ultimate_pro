import React, { useState } from 'react';
import './accordin.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Accordion = ({ title, content1, content2 ,role,date}) => {
   const [isExpanded, setIsExpanded] = useState(false);

   const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
   };

   return (
      <div className="accordion">
         <div className="accordion-header" onClick={toggleAccordion}>
            <div className="title_exp"><h3>{title}</h3>  <span>({date})</span></div>
            <div className='motion'> {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
         </div>
         {isExpanded && <div className="accordion-content">
            <h4>{role}</h4>
            <ul>
               <li>
                  {content1}
               </li>

               <li>
                {content2}
               </li>
            </ul>
         </div>}
      </div>
   );
};

export default Accordion;

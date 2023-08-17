import React from 'react'
import './contact.css'
import { programmer } from '../../assets'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_rhxcw34', 'template_qtl9y59', form.current,'07lrzsheC_N4usKaM')
         .then((result) => {
            console.log(result.text);
            alert("email send successfully😊");
            window.location.href('/');
         }, (error) => {
            console.log(error.text);
         });
   };
  return (
     <section className='contact_me' data-aos="fade-up" data-aos-duration="1000">
        <h2 className='contact_heading'>Contact Me</h2>
        <div className="content_content" >
           <div className="form_container">
              <form ref={form} onSubmit={sendEmail} className='form_main'>
                 <div className="form_inputs">
                    <label>Name</label>
                    <br />
                    <input type="text" name="user_name" />
                 </div>
                 <div className="form_inputs">
                    <label>Email</label>
                    <br />
                    <input type="email" name="user_email" />
                 </div>
                 <div className="form_inputs">
                    <label>Message</label>
                    <br />
                    <textarea name="message" />
                 </div>
                 <div className="form_inputs2">
                    <input type="submit" value="Send" />
                 </div>
              </form>
           </div>
        </div>
        </section>

  )
}

export default ContactUs


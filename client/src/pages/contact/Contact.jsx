import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const Result=()=>{
  return(
    <p>Your message has been succesfully sent! We will contact you soon</p>
  );
};

export default function Contact() {
  const [result,showResult] = useState(false);
  const sendEmail = (e) =>  {
    e.preventDefault();

    emailjs.sendForm('service_82gy6uq', 'template_ifxkq9a', e.target, 'user_PPVZEvykwolIY96zccT9M')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
    };

    setTimeout(()=>{
      showResult(false);
    },5000);
    
    return (
        <div>
             <div className="contactme" id="contact">
      <div className="contactOverlay">
        <div className="containeree">
          <div className="formee">
            <form className="forge" action="" onSubmit={sendEmail}>
              <div className="formWord">
                <h2>Contact Us</h2>
                <span style={{fontWeight:"600"}}>Full Name</span>
                <br />
                <input className="input100" type="text" name="fullName" placeholder="Enter full name" required />
                <br />
                <span style={{fontWeight:"600"}}>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone"  placeholder="Enter phone no." required />
                <br />
                <span style={{fontWeight:"600"}}>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" placeholder="Enter Email id" required />
                <br />
              </div>
              <div className="formWord">
                <span style={{fontWeight:"600"}}>Message</span>
                <br />
                <textarea name="message" placeholder="Enter Message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div class="row">{result ? <Result/>:null}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
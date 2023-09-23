import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export function Contact() {
  useEffect(()=>{
    Aos.init();
},[]);
  return (
        <>
      <section id="Contact">
        <div class="container">
          <div class="row">
            <h1 class="text-center text-uppercase p-5 cont-h1 text-success "><Typewriter
  options={{
    strings: "CONTACT",
    autoStart: true,
    loop: true,
  }}
/></h1>
            <div class="col-lg-6 col-12">
              <div>
                <label class="mb-3 text-uppercase fw-bold text-success">mobile number</label>
                <h4 className='text-dark'><FontAwesomeIcon icon={faPhone} shake style={{color: "#f20713",}} /> 9361031659</h4>
              </div>
              <div>
                <label class="mb-3 mt-3 text-uppercase fw-bold text-success">Email </label>
                <h5 className='text-dark'><FontAwesomeIcon icon={faEnvelope} bounce style={{color: "#f40b17",}} /> mmathavan806@gmail.com</h5>
              </div>
              <div>
                <label class="mb-3 mt-3 fw-bold text-uppercase text-success">Address</label>
                <h3 className='text-dark'><FontAwesomeIcon icon={faLocationDot} fade style={{color: "#f50a16",}} />Coimbatore,Tamilnadu</h3>
              </div>
            </div>
            <div class="col-lg-6 col-12 text-uppercase "data-aos="flip_down">
              <label className='text-dark'>Name</label><br></br>
                <input type="text" name="name"/><br></br>
                  <label className='text-dark'>email</label><br/>
                    <input type="email" name="email"/><br></br>
                      <label className='text-dark'>send a message</label><br/>
                        <textarea className='mb-2' name="message"></textarea><br></br>
                        <button className='bg-danger rounded'>submit</button>
                      </div>
                    </div>
                    </div>
                    </section>
                  </>
                  );
}
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import login from '../assets/login.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
export function Home(){
    useEffect(()=>{
        Aos.init();

    },[]);
    return(
    <>
      <div className="row homepage">
        <h1 className="text-center mt-5 p-5"><Typewriter
  options={{
    strings:"EMPLOYEE MANAGEMENT SYSTEM",
    autoStart: true,
    loop: true,
  }}
/></h1>
        <div className="col-lg-6 p-5">
            <img src={login} className="img-fluid" data-aos="fade-down"/>
            </div>
    <div className="col-lg-6 p-5 " data-aos="fade-down">
        <p className="homepara">This report includes a development presentation of an information system for managing
the employee data within a small company or organization. The system as such as it has been
developed is called Employee Management System</p><br></br>
    <Link to="/emplog"><button className="bg-primary rounded text-center text-light but">LOG IN</button></Link>
    </div>
    </div>
    </>
    );
}
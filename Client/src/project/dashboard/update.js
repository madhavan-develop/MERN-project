import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Update(){
    let {emp_id}=useParams()
  const[fname,setFname]=useState("")
  const[lname,setLname]=useState("")
  const[phone,setPhone]=useState("")
  const[city,setCity]=useState("")
  const[state,setState]=useState("")
  useEffect(()=>{
    fetch(`http://localhost:3017/getsingle/`+emp_id)
    .then(res=>res.json())
    .then((out)=>{
        setFname(out[0].fname)
        setLname(out[0].lname)
        setPhone(out[0].phone)
        setCity(out[0].city)
        setState(out[0].state)
    })
  },[])
  function userupdate(event){
    event.preventDefault()
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var phone=document.getElementById("phone").value
    var city=document.getElementById("city").value
    var state=document.getElementById("state").value
    var key={
       fname:fname,
       lname:lname,
       phone:phone,
       city:city,
       state:state
      }
      if(fname==""){
       alert("please enter first name")
     }
     else if(lname==""){
       alert("please enter last name")
     }
     else if(phone==""){
       alert("please enter phone number")
     }
     else if(city==""){
        alert("please enter city")
      }
      else if(state==""){
        alert("please enter state")
      }
     else{
       axios.put("http://localhost:3017/upto/"+emp_id,key)
       .then((res)=>{
           if(res.data.status==="error"){
               alert("data are not updated")
           }
           else if(res.data.status==="update"){
               alert("data are updated")
           }
       })
     }
   }
    return(
        <>
       <div class="text-center d-flex flex-column align-items-center register">
        <form onSubmit={userupdate}>
        <h1 class="mt-5 text-light ">USER UPDATE</h1>
        <table className=' p-2' cellpadding="10px">
            <tr>
                <td>
                <label>FIRST NAME</label> </td> 
                <td> <input type="text"id="fname" placeholder='Enter your First Name'value={fname} onChange={(updat)=>setFname(updat.target.value)}/></td>
            </tr>
            <tr>
                <td><label>LAST NAME</label></td> 
                <td><input type="text" id="lname"placeholder='Enter your Last Name' value={lname} onChange={(updat)=>setLname(updat.target.value)}/><br/></td>
            </tr>
            <tr>
                <td><label>PHONE NUMBER</label></td> 
                    <td> <input type="tel" id="phone" placeholder='Enter your Mobile Number' value={phone} onChange={(updat)=>setPhone(updat.target.value)}/></td>
            </tr>
            <tr>
                <td> <label>City</label></td>
                    <td> <input type="text" id="city"value={city}/></td>
            </tr>
            <tr>
                <td> <label>STATE</label></td>
                    <td> <input type="text" id="state"value={state} /></td>
            </tr>
            <tr>
             <td><button className='btn btn-primary'>SUBMIT</button>
            </td></tr>
            </table>
            </form>
            </div>
        </>
    );
}
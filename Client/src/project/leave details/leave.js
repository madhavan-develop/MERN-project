import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Leave(){
    var {emp_id}=useParams()
    const[fname,setFname ]=useState("")
    const[lname,setLname ]=useState("")
  useEffect(()=>{
      fetch("http://localhost:3017/getsingle/"+emp_id)
      .then(res=>res.json())
      .then((empres)=>{
        setFname(empres[0].fname)
        setLname(empres[0].lname)
      })
})
function leavedetails(event){
    //  var {emp_id}=useParams()
event.preventDefault()
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var leavefrom=document.getElementById("date").value
    var leaveto=document.getElementById("todate").value
    var description=document.getElementById("des").value
    var key={
        fname:fname,
        lname:lname,
        leavefrom:leavefrom,
        leaveto:leaveto,
        description:description
    }
    if(fname==""){
        alert("please enter first name")
    }
    else if(lname==""){
        alert("please enter first name")
    }
    else if(leavefrom==""){
        alert("please enter leave")
    }
    else if(leaveto==""){
        alert("please enter leave")
    }
    else if(description==""){
        alert("please enter the description")
    }
    else{
        axios.post("http://localhost:3017/leave/"+emp_id,key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("data are not inserted ")
               window.location.reload()
            }
            else if(res.data.status==="success"){
                alert("data are inserted")
            }

         })
    }
}
    return(
        <>
         <div class="text-center d-flex flex-column align-items-center register">
        <form onSubmit={leavedetails}>
        <h1 class="mt-5 text-light">LEAVE FORM</h1>
        <table className=' p-2' cellpadding="10px">
            <tr>
                <td>
                <label>FIRST NAME</label> </td> 
                <td> <input type="text"id="fname" placeholder='Enter your First Name' value={fname}/></td>
            </tr>
            <tr>
                <td><label>LAST NAME</label></td> 
                <td><input type="text" id="lname"placeholder='Enter your Last Name' value={lname}/> <br/></td>
            </tr>
            <tr>
                <td><label>LEAVE FROM</label></td> 
                    <td> <input type="date" id="date" placeholder='Enter your leave'/></td>
            </tr>
            <tr>
                <td> <label>LEAVE TO</label></td>
                    <td> <input type="date" id="todate" placeholder='Enter your leave'/></td>
            </tr>
            <tr>
            <td> <label>Description</label></td>
                    <td> <input type="text" id="des" placeholder='Enter the reason'/></td>
            </tr>
            <tr>
            <td><button type="submit">SUBMIT</button></td>
            </tr>
            </table>
            </form>
            </div>
           
        </>
    );
}
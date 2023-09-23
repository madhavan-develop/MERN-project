import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export function Dash(){
    let{emp_id}=useParams()
    const[fname,setFname ]=useState("")
    const[lname,setLname ]=useState("")
    const[leavefrom,setLeavefrom ]=useState("")
    const[leaveto,setLeaveto ]=useState("")
    const[description,setDescription ]=useState("")
  useEffect(()=>{
      fetch("http://localhost:3017/leavedetails/"+emp_id)
      .then(res=>res.json())
      .then((empres)=>{
        setFname(empres[0].fname)
        setLname(empres[0].lname)
        setLeavefrom(empres[0].leavefrom)
        setLeaveto(empres[0].leaveto)
        setDescription(empres[0].description)
      })
})
const dlte=(emp_id)=>{
  var key={emp_id:emp_id}
  axios.post("http://localhost:3017/leavedelete",key)
  .then((res)=>{
    if(res.data.status==="error"){
      alert("data are not deleted")
    }
    else if(res.data.status==="success"){
      alert("data are deleted successfully")
    }

  })
}
    return(
        <>
        <div>
        <h1 className="text-center mb-5 adminh1">welcome back  {fname}</h1>
        <div className="adminnav"> 
        <Link to={`/upd/${emp_id}`}><button className= "me-2 btn btn-success rounded">Edit</button></Link>
        <Link to="/home"><button className="btn btn-danger rounded">log out</button></Link> 
       <Link to ={`/leave/${emp_id}`}><button className="btn btn-primary rounded">Leave details</button></Link>
        </div>
       <div className='admindash'>
    <h1 className='text-center'>Leave details</h1>
      <div className='text-center d-flex justify-content-center flex-column'>
        <table>
          <thead>
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>LEAVE FROM</th>
              <th>LEAVE TO</th>
              <th>DESCRIPTION</th>
              <th>Delete</th>
             </tr>  
          </thead>
          <tbody>
                <tr>
                  <td>{fname}</td>
                  <td>{lname}</td>
                  <td>{leavefrom}</td>
                  <td>{leaveto}</td>
                  <td>{description}</td>
                  <td><button className="btn btn-danger rounded" onClick={()=>{dlte(emp_id)}}>REMOVE</button></td>
                </tr>
          </tbody>
        </table>
      </div>
      </div>
      </div>
        </>
    );
}
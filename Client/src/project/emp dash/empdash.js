import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
export function Empdash() {
  const [fetchd, setFetchd] = useState([])
  useEffect(() => {
    fetch("http://localhost:3017/maadhu")
      .then(result => result.json())
      .then(data => setFetchd(data))
  })
  let{emp_id}=useParams()
    const[fname,setFname ]=useState("")
  useEffect(()=>{
      fetch("http://localhost:3017/getsingle/"+emp_id)
      .then(res=>res.json())
      .then((adres)=>{
        setFname(adres[0].fname)
      })
  })
  // leave details
  const [fetchdata, setFetchdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:3017/leave")
      .then(result => result.json())
      .then(data => setFetchdata(data))
  })
  // emp details delete
  const dlte=(emp_id)=>{
    var key={emp_id:emp_id}
    axios.post("http://localhost:3017/delete",key)
    .then((res)=>{
      if(res.data.status==="error"){
        alert("data are not deleted")
      }
      else if(res.data.status==="success"){
        alert("data are deleted successfully")
      }

    })
  }
  return (
    <>
    <div className='admindash'>
    <div className='d-flex adminnav'>
    <h1 className='fw-bold mt-5 adminh1'>Welcome Admin ! {fname}</h1>
    <Link to="/home"><button className="btn btn-danger rounded mt-5">Logout</button></Link>
    </div>
    <h1 className='text-center mt-5'>EMP DETAILS</h1>
      <div className='text-center empdetails d-flex justify-content-center flex-column align-items-center admindashboard container'>
        <table>
          <thead>
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>CITY</th>
              <th>STATE</th>
              <th>USER NAME</th>
              <th>PASSWORD</th>
              <th>ROLL</th>
              <th>ADD</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {
              fetchd.map((value, index) => (
                <tr>
                  <td>{value.fname}</td>
                  <td>{value.lname}</td>
                  <td>{value.phone}</td>
                  <td>{value.email}</td>
                  <td>{value.city}</td>
                  <td>{value.state}</td>
                  <td>{value.email}</td>
                  <td>{value.password}</td>
                  <th>{value.roll}</th>
                 <Link to={`/adminupd/${emp_id}`}> <td><button className='btn btn-success'>Edit</button></td></Link>
                  <td><button className='btn btn-danger' onClick={()=>{dlte(value.emp_id)}}>dlte</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
{/* ...................leave details............... */}
      <div className='admindash'>
    <h1 className='text-center p-5  leaveh1'>Leave details</h1>
      <div className='text-center d-flex justify-content-center flex-column leavedetails container'>
        <table>
          <thead>
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>LEAVE FROM</th>
              <th>LEAVE TO</th>
              <th>DESCRIPTION</th>
             </tr>
          </thead>
            <tbody>
            {
              fetchdata.map((value, index) => (
                <tr>
                  <td>{value.fname}</td>
                  <td>{value.lname}</td>
                  <td>{value.leavefrom}</td>
                  <td>{value.leaveto}</td>
                  <td>{value.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
   
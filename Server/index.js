const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const db=require("mysql")
const connect=express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))
let databaseconnect=db.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Maadhu@17",
    database:"ems"

})
databaseconnect.connect(function(error)
{
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
 connect.post('/register',(request,response)=>{
    let {fname,lname,phone,email,city,state,password,roll}=request.body
    let sql='insert into empregister(fname,lname,phone,email,city,state,username,password,roll)values(?,?,?,?,?,?,?,?,?)'
    databaseconnect.query(sql,[fname,lname,phone,email,city,state,email,password,roll],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
  
            response.send({"status":"success"})
        }
    })

 })  
 connect.post('/login',(request,response)=>{
    let {username,password}=request.body
    let sql='select * from empregister where username=?'
    databaseconnect.query(sql,[username],(error,result)=>{
        if(error){
            response.send({"status":"empty set"})
        }
        else if(result.length>0){
           let dbusername=result[0].username
           let dbpassword=result[0].password
           let emp_id=result[0].emp_id
           let roll=result[0].roll
           if(dbusername===username && dbpassword===password){
            response.send({"status":"success", "emp_id":emp_id,"roll":roll})
           }
           else{
            response.send({"status":"invalid_user"})
           }
        }
        else{
            response.send({"status":"error"})
        }
    })
})
connect.get('/maadhu',(request,response)=>{
    let sql='select * from  empregister where roll="employee"'
    databaseconnect.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
connect.get('/getsingle/:emp_id',(request,response)=>{
    let {emp_id}=request.params
    let sql='select * from empregister where emp_id=?'
    databaseconnect.query(sql,[emp_id],(error,result)=>{
    if(error){
        response.send(error)
    } 
    else{
        response.send(result)
    }
    })
})
connect.post('/delete',(request,response)=>{
    let emp_id=request.body.emp_id
    let sql='delete from empregister where emp_id=?'
    databaseconnect.query(sql,[emp_id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
connect.put('/upto/:emp_id',(request,response)=>{
    let {emp_id}=request.params
    let {fname,lname,phone,city,state}=request.body
    let sql='update empregister set fname=?,lname=?,phone=?,city=?,state=? where emp_id=?'
    databaseconnect.query(sql,[fname,lname,phone,city,state,emp_id],(error,result)=>{
     if(error){
        response.send({"status":"error"})
        console.log(error)
     }
     else{
        response.send({"status":"update"})
     }
    })
})
connect.post('/leave/:emp_id',(request,response)=>{
    let {emp_id}=request.params
    
    let {fname,lname,leavefrom,leaveto,description}=request.body
    let sql='insert into leavedetails(fname,lname,leavefrom,leaveto,description,emp_id)values(?,?,?,?,?,?)'
    databaseconnect.query(sql,[fname,lname,leavefrom,leaveto,description,emp_id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
  
            response.send({"status":"success"})
        }
    })

 })  
// all leave details admin dashboard
 connect.get('/leave',(request,response)=>{
    let sql='select * from  leavedetails'
    databaseconnect.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.get('/leavedetails/:emp_id',(request,response)=>{
    let {emp_id}=request.params
    let sql='select * from leavedetails where emp_id=?'
    databaseconnect.query(sql,[emp_id],(error,result)=>{
    if(error){
        response.send(error)
    } 
    else{
        response.send(result)
    }
    })
})
connect.post('/leavedelete',(request,response)=>{
    let emp_id=request.body.emp_id
    let sql='delete from leavedetails where emp_id=?'
    databaseconnect.query(sql,[emp_id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
connect.listen(3017,()=>{
    console.log("maadhu")
})
})
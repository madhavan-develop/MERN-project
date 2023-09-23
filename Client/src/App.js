import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './project/menu/menu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './project/home/home';
import { Register } from './project/employee registration/empreg';
import { Emplog } from './project/emp login/emp';
import { Dash } from './project/dashboard/dashboard';
import { Empdash } from './project/emp dash/empdash';
import { Adminupdate } from './project/emp dash/adminupdate';
import { Update } from './project/dashboard/update';
import { Leave } from './project/leave details/leave';
import { Contact } from './project/contact/contact';
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Menu/>}/>
     <Route path="/home" element={[<Menu/>,<Home/>,<Contact/>]}/>
     <Route path="/empreg" element={<Register/>}/>
     <Route path="/emplog" element={[<Menu/>,<Emplog/>]}/>
     <Route path="/dashboard/:emp_id" element={<Empdash/>}/>
     <Route path="/empdash/:emp_id" element={<Dash/>}/>
     <Route path="/adminupd/:emp_id" element={<Adminupdate/>}/>
     <Route path="/upd/:emp_id" element={<Update/>}/>
     <Route path="/leave/:emp_id" element={<Leave/>}/>
     <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

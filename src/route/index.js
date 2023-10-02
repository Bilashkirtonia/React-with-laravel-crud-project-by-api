import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Contact from '../Pages/Contact.js';
import Student from '../Pages/Students.js';
import StudentCreate from '../Pages/StudentCreate.js';
import StudentEdit from '../Pages/Edit.js'

function Router() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path='/students' element={<Student/>} />
            <Route path='/student-create' element={<StudentCreate/>}/>
            <Route path='/:id/edit' element={<StudentEdit/>}/> 
            
        </Routes>
      
    </div>
  )
}

export default Router

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



function StudentCreate() {
    // const [ inputErrorList ,setInputErrorList ] = useState();
    // const [loading,setLoading] = useState(true);
    const Navigate = useNavigate();
    const[student ,setStudent] = useState(
        {
            name:"",
            email:"",
            roll:"",
            registion:""
        }
    );
    
    useEffect(()=>{
        
        
    },[]);

    const handleInput = (e)=>{
        e.persist();
        setStudent({...student,[e.target.name] : e.target.value});
    }


    const submitForm = (e) =>{
        // e.preventDefault();


        axios.post('http://127.0.0.1:8000/api/student',student).then((res)=>{
             Navigate("/students");

        });
    }

  return (
    <div>
    <form>
        
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">Add students <div className="float-end"><Link className="btn btn-success float-right" to="/students">Student list</Link></div></h5>
            

                <form className="w-50 m-auto border p-3">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="name" value={student.name} onChange={handleInput} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <span className='text-danger'>{inputErrorList.name}</span> */}
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Class</label>
                        <input type="text"  value={student.class} onChange={handleInput} name="class" className="form-control" id="exampleInputPassword1"/>
                        {/* <span className='text-danger'>{inputErrorList.email}</span> */}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Roll </label>
                        <input type="text" value={student.roll} onChange={handleInput} name="roll" className="form-control" id="exampleInputPassword1"/>
                        {/* <span className='text-danger'>{inputErrorList.roll}</span> */}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Registion</label>
                        <input type="text" name="reg" value={student.reg} onChange={handleInput} className="form-control" id="exampleInputPassword1"/>
                        {/* <span className='text-danger'>{inputErrorList.registion}</span> */}
                    </div>
                    
                    <button type="submit" onClick={submitForm}  className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
        </form>
    </div>
  )
}

export default StudentCreate

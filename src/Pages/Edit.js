import React, { useEffect, useState } from 'react'
import { Navigate,useParams,Link } from 'react-router-dom'
import axios from 'axios';

function Edit(prop) {
    //     const nav = Navigate();
    const {id} = useParams();
    const[student ,setStudent] = useState([]);
    
    useEffect(()=>{
        formData();
        
    },[]);

    const handleInput = (e)=>{
        e.persist();
        setStudent({...student,[e.target.name] : e.target.value});
    }

    const formData = (e) =>{

        axios.get('http://127.0.0.1:8000/api/student/${id}/edit').then((res)=>{
            
             setStudent({
                name:res.data.name,
                email:res.data.email,
                roll:res.data.roll,
                registion:res.data.reg
             })

        });
    }
  return (
    <div>
      <form>
        
                 <div className="card mt-5">
                     <div className="card-body">
                         <h5 className="card-title">Edit students <div className="float-end"><Link className="btn btn-success float-right" to="/students">Student list</Link></div></h5>
                    
        
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
                            
                             <button type="submit"  className="btn btn-primary">Submit</button>
                         </form>
                     </div>
                     </div>
                 </form>
    </div>
  )
}

export default Edit






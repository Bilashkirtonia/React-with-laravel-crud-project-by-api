import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Students() {
    const [loading,setLoading] = useState(true);
    const[users,setUsers] = useState([]);

    useEffect(()=>{

        axios.get("http://127.0.0.1:8000/api/student").then(res =>{
            console.log(res);
            setUsers(res.data.student);
            setLoading(false)
            
        });

    },[]);

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }

    var results = "";
    results = users && users.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.class}</td>
                <td>{item.roll}</td>
                <td>{item.reg}</td>
                
                <td><Link to={`/${item.id}/edit`} className="btn btn-sm btn-success">Edit</Link></td>

                <td className="btn btn-sm btn-danger">Delete</td>
               
            </tr>
        )
    });




  return (
    <div>
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">All students list <div className="float-end"><Link className="btn btn-success float-right" to="/student-create">Add new</Link></div></h5>
               

                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">SI</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Roll</th>
                        <th scope="col">Reg</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {results}
                        
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
  )
}

export default Students

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function EmpTable(){
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/employees')
            .then(response => response.json())
            .then(data => {
            console.log(data);
            })
            .catch(error => {
            console.error("Fetch error:", error.message);
            });
        }, []);
    return(
        <div className ="container">
            <h2 className="text-center">Employee Records</h2>
            <div className="table-container">
                <Link to="/employee/create" className="btn btn-add">Add New Employee</Link>
                <table>
                    <thead>
                        <tr>
                           <th>ID</th> 
                           <th>Name</th> 
                           <th>Department</th> 
                           <th>Phone</th> 
                           <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Daniel</td>
                            <td>Technology</td>
                            <td>1234567890</td>
                            <td>
                                <a href="#" className="btn btn-info">View</a> 
                                <a href="#" className="btn btn-primary">Edit</a>
                                <a href="#" className="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        /</div>
    )
}
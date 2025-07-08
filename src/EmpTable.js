import { useEffect, useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';

export default function EmpTable() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const DisplayDetails = (id) => {
    console.log("Employee ID:", id);
    // Navigate to the view details page. 
    navigate('/employee/view/' + id);
  }

  useEffect(() => {
    fetch('http://localhost:8000/employees')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setEmployees(data);
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
                        {
                            employees && employees.map((item) => (
                                <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.department}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button onClick={()=> DisplayDetails(item.id)} href="#" className="btn btn-info">View</button> 
                                <button href="#" className="btn btn-primary">Edit</button>
                                <button href="#" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                            )
                            )}
                    </tbody>
                </table>
            </div>
        /</div>
    )
}
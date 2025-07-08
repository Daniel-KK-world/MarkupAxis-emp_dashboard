import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function EmpTable() {
  // Store all employee records
  const [employees, setEmployees] = useState([]);

  // Store the user's search input
  const [searchTerm, setSearchTerm] = useState('');

  // Used to navigate programmatically
  const navigate = useNavigate();

  // Navigate to view page
  const DisplayDetails = (id) => {
    navigate('/employee/view/' + id);
  };

  // Navigate to edit page
  const EditDetails = (id) => {
    navigate('/employee/edit/' + id);
  };

  // Delete employee with confirmation
  const RemoveDetails = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      fetch('http://localhost:8000/employees/' + id, {
        method: "DELETE"
      })
        .then(res => {
          if (!res.ok) {
            throw new Error("Failed to delete employee");
          }
          return res.json();
        })
        .then(() => {
          alert("Employee deleted successfully!");
          // Remove deleted employee from UI
          setEmployees(employees.filter(emp => emp.id !== id));
        })
        .catch(err => console.error("Delete error:", err.message));
    }
  };

  // Fetch employee data on component mount
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

  // Filter employees based on search input
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="text-center">Employee Records</h2>

      {/* Search bar and add button */}
      <div className="top-bar">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by name or department..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/employee/create" className="btn btn-add">Add New Employee</Link>
      </div>

      {/* Employee table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Department</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button onClick={() => DisplayDetails(item.id)} className="btn btn-info">View</button>
                    <button onClick={() => EditDetails(item.id)} className="btn btn-primary">Edit</button>
                    <button onClick={() => RemoveDetails(item.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              // Fallback UI when no matching results found
              <tr>
                <td colSpan="5" style={{ textAlign: "center", color: "#ccc" }}>
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

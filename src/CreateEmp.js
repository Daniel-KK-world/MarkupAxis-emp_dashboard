import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CreateEmp() {
  // State variables for form fields
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");

  // State to trigger validation messages
  const [validation, setValidation] = useState(false);

  // For redirecting after successful submission
  const navigate = useNavigate();

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Gather form data into object
    const employeeData = { id, name, department, phone };

    // Send POST request to mock API (JSON Server)
    fetch('http://localhost:8000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeeData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to add employee");
        }
        return response.json();
      })
      .then(() => {
        alert("Employee Added Successfully");
        navigate("/"); // Redirect to homepage after success
      })
      .catch(error => {
        console.error("Fetch error:", error.message);
        alert("Something went wrong.");
      });
  }

  return (
    <div className="container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        
        {/* ID Field */}
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          required
          onChange={e => setId(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {id.length === 0 && validation && (
          <span className='errorMsg'>Please enter your ID</span>
        )}

        {/* Name Field */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          onChange={e => setName(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {name.length < 3 && validation && (
          <span className='errorMsg'>Please enter your name</span>
        )}

        {/* Department Field */}
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          value={department}
          required
          onChange={e => setDepartment(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {department.length < 3 && validation && (
          <span className='errorMsg'>Please enter your department</span>
        )}

        {/* Phone Field */}
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          required
          onChange={e => setPhone(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {phone.length < 10 && validation && (
          <span className='errorMsg'>Please enter a valid phone number</span>
        )}

        {/* Action Buttons */}
        <div>
          <button className="btn btn-save">Save</button>
          <Link to="/" className="btn btn-back">Back</Link>
        </div>
      </form>
    </div>
  );
}

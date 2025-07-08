import { use, useState } from 'react';
import{ Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CreateEmp(){
    const [id, setId] =useState("");
    const [name, setName] =useState("");
    const [department, setDepartment] =useState("");
    const [phone, setPhone] =useState("");
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const employeeData = {id,name,department,phone};
        console.log("Employee Data:", employeeData);
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
                navigate("/");
            })
            .catch(error => {
                console.error("Fetch error:", error.message);
                alert("Something went wrong.");
            });
        }

    return(
       <div className="container">
        <h2>Add New employee</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">ID</label>
            <input type="text" id="id" name="id"value={id} required onChange={e=> setId(e.target.value)} onMouseDown={() => setValidation(true)}></input>
            {id.length == 0 && validation && <span className='errorMsg'>Please Enter your ID:</span>}

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} required onChange={e=> setName(e.target.value)} onMouseDown={() => setValidation(true)} ></input>
            {name.length < 3 && validation && <span className='errorMsg'>Please Enter your name:</span>}

            <label htmlFor="department">Department</label>
            <input type="text" id="department" name="department"value={department} required onChange={e=> setDepartment(e.target.value)} onMouseDown={() => setValidation(true)} ></input>
            {department.length < 3 && validation && <span className='errorMsg'>Please Enter your department:</span>}

            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone"value={phone}   required onChange={e=> setPhone(e.target.value)} onMouseDown={() => setValidation(true)} ></input>
            {phone.length < 10 && validation && <span className='errorMsg'>Please Enter a valid Phone number:</span>}

            <div>
            <button className="btn btn-save">Save</button>
            <Link to="/" className="btn btn-back">Back</Link>
            </div>
        </form>
       </div>
    )}

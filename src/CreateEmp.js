import { use, useState } from 'react';
import{ Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CreateEmp(){
    const [id, setId] =useState("");
    const [name, setName] =useState("");
    const [department, setDepartment] =useState("");
    const [phone, setPhone] =useState("");
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


    return(
       <div className="container">
        <h2>Add New employee</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">ID</label>
            <input type="text" id="id" name="id"value={id} onChange={e=> setId(e.target.value)}></input>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={e=> setName(e.target.value)}></input>

            <label htmlFor="department">Department</label>
            <input type="text" id="department" name="department"value={department} onChange={e=> setDepartment(e.target.value)}></input>

            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone"value={phone} onChange={e=> setPhone(e.target.value)}></input>

            <div>
            <button className="btn btn-save">Save</button>
            <Link to="/" className="btn btn-back">Back</Link>
            </div>
        </form>
       </div>
    )
}
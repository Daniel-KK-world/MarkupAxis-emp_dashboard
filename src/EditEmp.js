import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmp() {
    const { employeeId } = useParams();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [phone, setPhone] = useState("");
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/employees/' + employeeId)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Employee not found");
                }
                return res.json();
            })
            .then(data => {
                setId(data.id);
                setName(data.name);
                setDepartment(data.department);
                setPhone(data.phone);
            })
            .catch(error => {
                console.error("Fetch error:", error.message);
            });
    }, [employeeId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const employeeData = { id, name, department, phone };

        fetch('http://localhost:8000/employees/' + employeeId, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employeeData)
        })
        .then(res => {
            alert("Employee updated successfully!");
            navigate("/");
        })
        .catch(err => console.log("Update error:", err.message));
    };

    return (
        <div className="container">
            <h2>Edit Employee Details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID</label>
                <input type="text" id="id" name="id" value={id} required onChange={e => setId(e.target.value)} onMouseDown={() => setValidation(true)} />
                {id.length === 0 && validation && <span className='errorMsg'>Please enter your ID.</span>}

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} required onChange={e => setName(e.target.value)} onMouseDown={() => setValidation(true)} />
                {name.length < 3 && validation && <span className='errorMsg'>Please enter your name.</span>}

                <label htmlFor="department">Department</label>
                <input type="text" id="department" name="department" value={department} required onChange={e => setDepartment(e.target.value)} onMouseDown={() => setValidation(true)} />
                {department.length < 3 && validation && <span className='errorMsg'>Please enter your department.</span>}

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" value={phone} required onChange={e => setPhone(e.target.value)} onMouseDown={() => setValidation(true)} />
                {phone.length < 10 && validation && <span className='errorMsg'>Please enter a valid phone number.</span>}

                <div>
                    <button className="btn btn-save">Update</button>
                    <Link to="/" className="btn btn-back">Back</Link>
                </div>
            </form>
        </div>
    );
}

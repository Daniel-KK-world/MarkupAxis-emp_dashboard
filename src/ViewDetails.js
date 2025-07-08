import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewDetails() {
  const { employeeId } = useParams();
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/employees/' + employeeId)
      .then(res => {
        if (!res.ok) {
          throw new Error("Employee not found");
        }
        return res.json();
      })
      .then(data => setEmployeeData(data))
      .catch(error => {
        console.error("Fetch error:", error.message);
        setEmployeeData(null);
      });
  }, [employeeId]);

  return (
    <div className="container">
      <h1>Employee Details</h1>

      {employeeData === null ? (
        <p style={{ color: "red" }}>Employee not found.</p>
      ) : employeeData?.id ? (
        <div className="details">
          <p><strong>Employee ID:</strong> {employeeData.id}</p>
          <p><strong>Name:</strong> {employeeData.name}</p>
          <p><strong>Department:</strong> {employeeData.department}</p>
          <p><strong>Phone:</strong> {employeeData.phone}</p>
        </div>
      ) : (
        <p>Loading employee data...</p>
      )}

      <Link to="/" className="btn btn-back">Back</Link>
    </div>
  );
}

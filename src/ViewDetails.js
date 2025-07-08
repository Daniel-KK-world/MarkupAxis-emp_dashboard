import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewDetails() {
  // Extract employee ID from route params
  const { employeeId } = useParams();

  // Holds the fetched employee data
  const [employeeData, setEmployeeData] = useState(null);

  // Fetch employee info when the component mounts or when employeeId changes
  useEffect(() => {
    fetch('http://localhost:8000/employees/' + employeeId)
      .then(res => {
        if (!res.ok) {
          // Handle 404 or fetch issues
          throw new Error("Employee not found");
        }
        return res.json();
      })
      .then(data => setEmployeeData(data)) // Set the fetched data to state
      .catch(error => {
        console.error("Fetch error:", error.message);
        setEmployeeData(null); // Fallback to null if fetch fails
      });
  }, [employeeId]);

  return (
    <div className="container">
      <h1>Employee Details</h1>

      {/* Conditional rendering: handle loading, error, and data states */}
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

      {/* Navigation back to main table */}
      <Link to="/" className="btn btn-back">Back</Link>
    </div>
  );
}

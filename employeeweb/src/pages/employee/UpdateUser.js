import './UpdateUser.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/employee/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching employee data:", error.message);
      }
    };

    fetchEmployeeData();
  }, [id]);

  // ✅ هادي نخليوها بوحدها
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Employee updated successfully!");
        navigate("/");
      } else {
        alert("Failed to update employee.");
      }
    } catch (error) {
      console.error("Error Updating User:", error.message);
    }
  };

  return (
    <div className="center-form">
      <h1>Edit Employee</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName" className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone" className="mb-3">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicDepartment" className="mb-3">
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter Department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Edit Employee
        </Button>
      </Form>
    </div>
  );
};

export default UpdateUser;

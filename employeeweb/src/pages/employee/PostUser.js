import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./PostUser.css";
import { useNavigate } from "react-router-dom";

const PostUser = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

 const navigate = useNavigate();


  const handleSubmit = async   (e)=> {
    e.preventDefault();
    console.log(FormData);
      try { 
        const response = await fetch("http://localhost:8080/api/employee",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"},
          body: JSON.stringify(FormData),
        });
        const data = await response.json();
        console.log("User posted successfully:", data); 
        navigate("/")

      } catch (error) {
      console.error("Error posting user data:", error.message);
    }


    // هنا تقدر دير POST API call
  }

  return (
    <div className="center-form">
      <h1>Post New User</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            value={FormData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={FormData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={FormData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicDepartment">
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter Department"
            value={FormData.department}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Post Employee
        </Button>
      </Form>
    </div>
  );
};

export default PostUser;

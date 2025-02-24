import React, { useState } from 'react'
import { Button, Container, Form, Carousel, Image, Alert } from 'react-bootstrap'
import { authenticate } from '../services/login-service'

export default function Login(props) {
  const defaultObj = {
    EmailId: "",
    Password: ""
  }

  const [userObj, setUserObj] = useState(defaultObj)
  const [errors, setErrors] = useState({ email: "", password: "" })

  // Regular Expressions for Validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target

    setUserObj((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validateInputs = () => {
    let emailError = "";
    let passwordError = "";

    if (!emailRegex.test(userObj.EmailId)) {
      emailError = "Invalid email format";
    }

    if (!passwordRegex.test(userObj.Password)) {
      passwordError = "Password must be at least 8 characters long, include an uppercase letter, lowercase letter, a number, and a special character.";
    }

    setErrors({ email: emailError, password: passwordError });

    return !emailError && !passwordError;
  }

  const handleLogin = async () => {
    if (!validateInputs()) return;
  
    try {
      let authData = await authenticate(userObj);
  
      if (authData && authData.Message === "User successfully logged in") {
        props.getValidUser(true);
      } else {
        props.getValidUser(false);
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  };


  return (
    <Container bsPrefix='login-container'>
      <div className="login-page">
        <div className="carousel-container">
          <Carousel fade>
            {/* Uncomment the carousel items when images are available */}
          </Carousel>
        </div>

        <div className="login-box">
          <div className='app-name'>
            <div className="login-system-text">Banking</div>
            <div className="login-system-text">Kiosk Portal</div>
          </div>

          <div className='login-input'>
            <Form.Label className='login-input-label'>Email Id</Form.Label>
            <Form.Control
              type='email'
              className='login-input-field'
              name='EmailId'
              value={userObj.EmailId}
              onChange={handleChange}
            />
            {errors.email && <Alert variant="danger" className="mt-2">{errors.email}</Alert>}
          </div>

          <div className='login-input'>
            <Form.Label className='login-input-label'>Password</Form.Label>
            <Form.Control
              type='password'
              className='login-input-field'
              name='Password'
              value={userObj.Password}
              onChange={handleChange}
            />
            {errors.password && <Alert variant="danger" className="mt-2">{errors.password}</Alert>}
          </div>

          <div className="login-btn-container">
            <Button className='login-btn' onClick={handleLogin}>LOGIN</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

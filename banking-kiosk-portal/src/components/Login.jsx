import React, { useState } from 'react'
import { Button, Container, Form, Carousel, Image } from 'react-bootstrap'
import { authenticate } from '../services/login-service'
// import {redirect, useNavigate} from 'react-router-dom'
// import { useEffect } from "react";
import login1 from '../assets/login1.png';
import login2 from '../assets/login2.png';
import login3 from '../assets/login3.png';
import login4 from '../assets/login4.png';
import login5 from '../assets/login5.png';

export default function Login(props) {

  let defaultObj = {
    EmailId: "",
    Password: ""
  }
  const [userObj, setUserObj] = useState(defaultObj)

  const handleChange = (e) => {
    const { name, value } = e.target

    setUserObj((prev) => ({
      ...prev,
      [name]: value
    })
  )}  

  const handleLogin = async () => {
    let authData = await authenticate(userObj).catch((err)=>console.log(err))
    if (authData) {
      props.getValidUser(true)
    }
  }
  
   

  return (
    <Container bsPrefix='login-container'>
      <div className="login-page">
      <div className="carousel-container">
      <Carousel fade>
{/* <Carousel.Item>
    <Image className="login-image" src={login1} alt="First slide"/>
    < Carousel.Caption>
    <div className="caption-title">Developed By Vidyalaknar Polytechnic Students</div>
    </Carousel.Caption>
</Carousel.Item> */}
{/* <Carousel.Item>
    <Image className="login-image" src={login2}alt="Second slide"/>
    < Carousel.Caption>
    <div className="caption-title">Developed By Vidyalankar Polytechnic Students</div>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <Image className="login-image" src={login3}alt="Third slide"/>
    < Carousel.Caption>
    <div className="caption-title">Developed By Vidyalankar Polytechnic Students</div>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <Image className="login-image" src={login4}alt="Second slide"/>
    < Carousel.Caption>
    <div className="caption-title ">Developed By Vidyalankar Polytechnic Students</div>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <Image className="login-image" src={login5} alt="First slide"/>
    < Carousel.Caption>
    <div className="caption-title t">Developed By Vidyalaknar Polytechnic Students</div>
    </Carousel.Caption>
</Carousel.Item> */}
</Carousel>
</div>

        <div className="login-box">
          <div className='app-name'>
            <div className="login-system-text">Banking</div>
            <div className="login-system-text">Kiosk Portal</div>
          </div>

          <div className='login-input'>
            <Form.Label className='login-input-label'>
              Email Id
            </Form.Label>
            <Form.Control type='email' className='login-input-field' name='EmailId' value={userObj.EmailId} onChange={handleChange}>

            </Form.Control>
          </div>

          <div className='login-input'>
            <Form.Label className='login-input-label'>
              Password
            </Form.Label>
            <Form.Control type='password' className='login-input-field' name='Password' value={userObj.Password} onChange={handleChange}>

            </Form.Control>
          </div>
          <div className="login-btn-container">
            <Button className='login-btn' onClick={handleLogin}>
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
 
}

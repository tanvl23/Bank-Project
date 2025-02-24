import React from 'react';
import { Button, Carousel, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import login1 from '../assets/login1.png';
import login2 from '../assets/login2.png';
import login3 from '../assets/login3.png';
import login4 from '../assets/login4.png';
import login5 from '../assets/login5.png';
import '../style/Banner.css'; // Ensure correct CSS file is imported

const Banner = () => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      await axios.post('http://localhost:5000/api/increment-click'); // Call API
      navigate('/home'); // Navigate to home
    } catch (error) {
      console.error('Error tracking button click:', error);
    }
  };
  return (
    <div className="banner-container">
      {/* Full-Screen Rotating Banners */}
      <Carousel fade controls={false} indicators={false} interval={3000} className="full-screen-carousel">
        <Carousel.Item>
          <Image className="banner-image" src={login1} alt="Welcome to Our Bank" />
          <Carousel.Caption>
            <h3>Welcome to Our Bank</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="banner-image" src={login2} alt="Welcome to Our Bank" />
          <Carousel.Caption>
            <h3>Safe and Secure Banking</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="banner-image" src={login3} alt="Welcome to Our Bank" />
          <Carousel.Caption>
            <h3>Quick and Easy Loans</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <Image className="banner-image" src={login4} alt="Welcome to Our Bank" />
          <Carousel.Caption>
            <h3> Easy Banking Solutions</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <Image className="banner-image" src={login5} alt="Welcome to Our Bank" />
          <Carousel.Caption>
            <h3>Various Banking Services</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Button Below the Carousel */}
      <div className="button-container">
        <Button className="home-btn" onClick={() => navigate('/home')}>Proceed to Home</Button>
      </div>
    </div>
  );
};

export default Banner;

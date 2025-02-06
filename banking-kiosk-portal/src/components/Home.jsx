import React, { useState, useEffect } from 'react'
// import { Router } from 'react-router-dom';
import Main from './Main';
// import {Route, Routes, Router} from"react-Router-dom";
// import { Button, Container } from 'react-bootstrap'
// import { authenticate } from '../services/login-service'
//  import {useNavigate} from 'react-router-dom'
// import "./Home.css";
// import "./Login.css";
// import "./App.css";
import { Router, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';



export default function Home() {
  return (
    // <>
    //   <Header />
      <Main />
    //   <Footer />
    // </>
  );
};

import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import './App.css'
import './style/Home.css'
import './style/Accinfo.css'
import './style/Loans.css'
import './style/Bank-services.css'
import Login from './components/Login';


function App() {

  const [validUser, setValidUser] = useState()

  const getValidUser = (user) => {
    if (user){
      sessionStorage.setItem("ValidUser", true)
      setValidUser(true)
    }
    else {
      sessionStorage.setItem("ValidUser", false)
      setValidUser (false)
    }
  }

  useEffect(()=> {
    const isValidUser = sessionStorage.getItem("ValidUser")
    if (isValidUser){
      setValidUser(true)
    }
    else {
      setValidUser(false)
    }
  },[validUser])

  return (
    <React.Fragment>
      {validUser === true && <Home />}
      {(!validUser || validUser === false) && <Login getValidUser={getValidUser} />}
    </React.Fragment>
  );
}

export default App;

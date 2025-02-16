import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import './App.css'
import './style/Home.css'
import './style/Accinfo.css'
import './style/Loans.css'
import './style/Bank-services.css'
import './style/Atm.css'
// import './style/Chkbook.css'
import './style/Locker.css'
import './style/Digital.css'
import './style/custsupport.css'
import './style/LocateUs.css'
import './style/Rules.css'
import './style/Updates.css'
import './style/SavingAcc.css'
import './style/Recurring.css'
import './style/Fixed.css'
import './style/Salary.css'
import './style/Current.css'
import './style/Eduloan.css'
import './style/Homeloan.css'
import './style/Goldloan.css'
import './style/Perloan.css'
import './style/Vehloan.css'
import './style/Busiloan.css'
import './style/ChatPopup.css'

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

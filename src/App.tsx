import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import LoginPage from './loginPg';
import SignInPage from './signInPg';
import HomePage from './homePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App: React.FC = () => {
  const [myAppIsLoggedIn, setMyAppIsLoggedIn] = useState<boolean>(false);
  console.log(myAppIsLoggedIn);



  // Check login status on app start
  const checkLoginStatus = () => {
    console.log('checkLoginStatus called');
    const storeLoginStatus = localStorage.getItem('myAppIsLoggedIn');
    if (storeLoginStatus === 'true') {
      setMyAppIsLoggedIn(true);
      console.log('myAppIsLoggedIn set to true');
    } else {
      setMyAppIsLoggedIn(false);
      console.log('myAppIsLoggedIn set to false');
    }
  };

  const logIn = () => {
    setMyAppIsLoggedIn(true);
    localStorage.setItem('myAppIsLoggedIn', JSON.stringify(true));
  };

  const handleLogout = () => {
    console.log('handlelogout')
    setMyAppIsLoggedIn(false);
    localStorage.setItem('myAppIsLoggedIn', JSON.stringify(false));
    toast.success('Logged out successfully!', {
      // ...
    });
  };

  useEffect(() => {
    // Check login status on app start
    checkLoginStatus();
  }, []);

  // Listen for changes to isLoggedIn state and store in local storage
  useEffect(() => {
    localStorage.setItem('myAppIsLoggedIn', JSON.stringify(myAppIsLoggedIn));
  }, [myAppIsLoggedIn]);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={myAppIsLoggedIn ? <HomePage onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage logIn={logIn} />} />
        <Route path="/signup" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default App;

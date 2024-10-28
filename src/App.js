import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        //logged in
        console.log(userAuth);
      } else {
        //logged out
      }
    })
  }, []);


  return (
    <div className="app">

      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
          <Route path="/" element={<HomeScreen />}/>
        </Routes>
        )}
      </BrowserRouter>

    </div>
  );
}

export default App;

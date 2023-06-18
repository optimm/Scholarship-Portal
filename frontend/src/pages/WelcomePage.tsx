// import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/styles.css';

function WelcomePage() {
  return (
    <div className='welcome--container'>
      <img src={logo} />
      <h1 className='welcome--header'>ScholarEase</h1>
    </div>
  );
}

export default WelcomePage;

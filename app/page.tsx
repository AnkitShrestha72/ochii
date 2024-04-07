import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage';

const page = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default page
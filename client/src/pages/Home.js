import React from 'react';
import NavBar from './NavBar'
import ImageCarousel from './ImageCarousel';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <ImageCarousel />
      <h1 className='title-logo'>A Novel Idea</h1>
      <p>We like big books and we cannot lie!</p>
    </div>
  );
};

export default HomePage;


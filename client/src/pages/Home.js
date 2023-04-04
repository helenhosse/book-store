import React from 'react';
import ImageCarousel from './ImageCarousel';
const { Header, Content, Footer } = Layout;
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
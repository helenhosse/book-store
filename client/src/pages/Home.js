import React from 'react';
import ImageCarousel from './ImageCarousel';
import Events from './Events'
import Contact from './Contact'
import About from './About'
import { Divider } from "antd"

const HomePage = () => {
  return (
    <div>
      <ImageCarousel />
      <Divider type="vertical" />
      <div>{<About />}</div>
      <Divider type="vertical" />
      <div>{<Events />}</div>
      <Divider type="vertical" />
      <div>{<Contact />}</div> 
      <Divider type="vertical" />  
    </div>
  );
};

export default HomePage;
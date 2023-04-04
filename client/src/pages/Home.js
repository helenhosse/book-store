import React from 'react';
import ImageCarousel from './ImageCarousel';
import Events from './Events'
import Contact from './Contact'
import About from './About'
import { Divider } from "antd"

const HomePage = () => {
  return (
    <div style={{ maxWidth: '75%', margin: '0 12% 0 12%'}}>
      <ImageCarousel />
      <Divider type="vertical" />
      <div class="homeBody">{<About />}</div>
      <Divider type="vertical" />
      <div class="homeBody">{<Events />}</div>
      <Divider type="vertical" />
      <div class="homeBody">{<Contact />}</div> 
      <Divider type="vertical" />  
    </div>
  );
};

export default HomePage;
import { Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Shop from "./pages/Shop";
import NavBar from './pages/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
//   // const [activePage, setActivePage] = useState("Home");

//   // const displayPage = () => {
//   //   // need to adjust for signup/login
//   //   switch (activePage) {
//   //     case "About":
//   //       return <About />;
//   //     case "Contact":
//   //       return <Contact />;
//   //     case "Events":
//   //       return <Events />;
//   //     case "Shop":
//   //       return <Shop />;
//   //     default:
//   //       return <Home />;
//   //   }
//   };

  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
       </Routes>
    </div>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
// import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Shop from "./pages/Shop";
import NavBar from './pages/NavBar';
import './App.css';

function App() {
  // const [books] = useState([])

  // useEffect(() => {
  //   fetchBooks();
  // }, []);

  // const fetchBooks = async () => {
  //   const response = await fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value);
  //   const data = await response.json();
  //   setBooks(data);
  // };

 

  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/events" element={<Events />} />
       </Routes>
      {/* <nav>
        <ul>
          <li>
            <button onClick={() => setActivePage("Home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setActivePage("About")}>About</button>
          </li>
          <li>
            <button onClick={() => setActivePage("Contact")}>Contact</button>
          </li>
          <li>
            <button onClick={() => setActivePage("Events")}>Events</button>
          </li>
          <li>
            <button onClick={() => setActivePage("Shop")}>Shop</button>
          </li>
        </ul>
      </nav>
      {displayPage()} */}
    </div>
  );
}

export default App;
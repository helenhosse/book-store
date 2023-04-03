import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Shop from "./pages/Shop";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const displayPage = () => {
    // need to adjust for signup/login
    switch (activePage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Events":
        return <Events />;
      case "Shop":
        return <Shop />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav>
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
      {displayPage()}
    </div>
  );
}

export default App;

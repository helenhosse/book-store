import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


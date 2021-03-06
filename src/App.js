import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-link text-bold">
          <code>Ed Reacts!</code>
        </p>
        <img src="https://avatars.githubusercontent.com/u/49672830?v=4" alt="ed profile" className="img-circle"></img>
        <b className="App-link">@
        <a
          className="App-link text-bold"
          href="https://github.com/edchelstephens/"
          target="_blank"
          rel="noopener noreferrer"
        >edchelstephens
        </a>
        </b>
        <p>
          <code>Believer. Driven.<br></br> 
            Loves basketball. <br></br> 
            Passion for Computing and Self-Development. <br></br> 
            Python Django React Full Stack Web Developer.</code></p>
      </header>
    </div>
  );
}

export default App;

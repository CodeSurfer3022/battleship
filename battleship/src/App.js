import './App.css';
import Main from "./Components/Main";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
// import {faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
// import {faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Battleship</h1>
      </header>
      <Main />
      <footer>
        <p>Made by Chandra.</p>
        <p>Hosted with <FontAwesomeIcon icon={faHeart} /> by github.</p>
      </footer>
    </div>
  );
}

export default App;

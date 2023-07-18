import ImageTop from '../components/Img-top/img-top.jsx';
import Presentation from '../components/Presentation/presentation.jsx';
import Works from '../components/Works/works.jsx';
import Skills from '../components/Skills/skills.jsx';
import SocialNetwork from '../components/Social-network/social-network.jsx';
/*import logo from './logo.svg';*/
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Titre et menu</p>
        <ImageTop />
        <h2>Présentation</h2>
        <Presentation />
        <h2>Travaux récents</h2>
        <Works />
        <h2>Compétences</h2>
        <Skills />
        <h2>Réseaux sociaux</h2>
        <SocialNetwork />
        {/*        <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
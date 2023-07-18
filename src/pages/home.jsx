import ImageTop from '../components/Img-top/img-top.jsx';
import Presentation from '../components/Presentation/presentation.jsx';
import Works from '../components/Works/works.jsx';
import Skills from '../components/Skills/skills.jsx';
/*import logo from './logo.svg';*/
import './home.css';
/*import './App.css';*/

function Home() {
  return (
    <div className="app">
      <ImageTop />
      <div className = "titre-section">
        <h2>PRÉSENTATION</h2>
      </div>
      <Presentation />
      <div className = "titre-section">
        <h2>TRAVAUX RÉCENTS</h2>
      </div>
      <Works />
      <div className = "titre-section">
        <h2>COMPÉTENCES</h2>
      </div>
      <Skills />
      <div className = "titre-section">
        <h2>MIND MAP</h2>
      </div>
    </div>
  );
}

export default Home;
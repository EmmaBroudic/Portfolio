import ImageTop from '../components/Img-top/img-top.jsx';
import Presentation from '../components/Presentation/presentation.jsx';
import Works from '../components/Works/works.jsx';
import Skills from '../components/Skills/skills.jsx';
import SocialNetwork from '../components/Social-network/social-network.jsx';
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
        <h2>RÉSEAUX SOCIAUX</h2>
      </div>
      <SocialNetwork />
      <p>Footer</p>
    </div>
  );
}

export default Home;
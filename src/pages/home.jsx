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
      <h2>Présentation</h2>
      <Presentation />
      <h2>Travaux récents</h2>
      <Works />
      <h2>Compétences</h2>
      <Skills />
      <h2>Réseaux sociaux</h2>
      <SocialNetwork />
      <p>Footer</p>
    </div>
  );
}

export default Home;
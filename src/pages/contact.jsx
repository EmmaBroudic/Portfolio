import ImageTop from '../components/Img-top/img-top.jsx';
import SocialNetwork from '../components/Social-network/social-network.jsx';
/*import logo from './logo.svg';*/
import './home.css';
/*import './App.css';*/

function Home() {
  return (
    <div className="app">
      <ImageTop />
      <div className = "titre-section">
        <h2>RÉSEAUX SOCIAUX</h2>
      </div>
      <SocialNetwork />
    </div>
  );
}

export default Home;
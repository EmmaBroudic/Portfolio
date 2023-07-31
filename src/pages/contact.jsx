import ImageTop from '../components/Img-top/img-top.jsx';
import SocialNetwork from '../components/Social-network/social-network.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopesBulk, faHandshake} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*import logo from './logo.svg';*/
import './home.css';
/*import './App.css';*/

function Home() {

  library.add(faHandshake);

  return (
    <div className="app">
      <ImageTop />
      <div className = "titre-section">
        <h2>ME CONTACTER</h2>
        <p><FontAwesomeIcon className = "pad" icon={faEnvelopesBulk} /></p>
        <form action="/envoyer_message" method="post">
          <label for="nom">Nom :</label>
          <input type="text" id="nom" name="nom" required></input>
          
          <label for="email">E-mail :</label>
          <input type="email" id="email" name="email" required></input>

          
          <label for="sujet">Sujet :</label>
          <input type="text" id="sujet" name="sujet" required></input>

          
          <label for="message">Message :</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          
          <input type="submit" value="Envoyer"></input>
        </form>
      </div>
      <div className = "titre-section">
        <h2>RÉSEAUX SOCIAUX</h2>
        <p><FontAwesomeIcon className = "pad" icon={faHandshake} /></p>
      </div>
      <SocialNetwork />
    </div>
  );
}

export default Home;
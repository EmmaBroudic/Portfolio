import ImageTop from '../components/Img-top/img-top.jsx';
import SocialNetwork from '../components/Social-network/social-network.jsx';
import Mail from '../components/Mail/mail.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopesBulk, faHandshake} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';

/* Ce bloc de code réunit les différents éléments présents sur la page contact */

function Home() {

  library.add(faHandshake);

  return (
    <div className="app">
      <ImageTop />
      <div className = "bloc">
        <div className = "titre-section">
          <h2 className = "titres">Mail</h2>
          <p className = "icones"><FontAwesomeIcon className = "pad" icon={faEnvelopesBulk} /></p>
        </div>
        <Mail />
      </div>
      <div className = "bloc">
        <div className = "titre-section">
          <h2 className = "titres">Réseaux sociaux</h2>
          <p className = "icones"><FontAwesomeIcon className = "pad" icon={faHandshake} /></p>
        </div>
        <SocialNetwork />
      </div>
    </div>
  );
}

export default Home;
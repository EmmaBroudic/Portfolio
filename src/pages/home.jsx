import ImageTop from '../components/Img-top/img-top.jsx';
import Presentation from '../components/Presentation/presentation.jsx';
import Works from '../components/Works/works.jsx';
import Skills from '../components/Skills/skills.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencil, faComputer, faKitchenSet} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.css';

function Home() {

  library.add(faPencil);

  library.add(faComputer);

  library.add(faKitchenSet);

  return (
    <div className="app">
      <ImageTop />
      <div className = "bloc">
        <div className = "titre-section">
          <h2 className = "titres">Présentation</h2>
          <p className = "icones"><FontAwesomeIcon className = "pad" icon={faPencil} /></p>
        </div>
        <Presentation />
      </div>
      <div className = "bloc">
        <div className = "titre-section">
          <h2 className = "titres">Travaux récents</h2>
          <p className = "icones"><FontAwesomeIcon className = "pad" icon={faComputer} /></p>
        </div>
        <Works />
      </div>
      <div className = "bloc">
        <div className = "titre-section">
          <h2 className = "titres">Compétences</h2>
          <p className = "icones"><FontAwesomeIcon className = "pad" icon={faKitchenSet} /></p>
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
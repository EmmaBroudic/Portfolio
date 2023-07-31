import ImageTop from '../components/Img-top/img-top.jsx';
import Presentation from '../components/Presentation/presentation.jsx';
import Works from '../components/Works/works.jsx';
import Skills from '../components/Skills/skills.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencil, faComputer, faKitchenSet} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.css';
/*import './App.css';*/

function Home() {

  library.add(faPencil);

  library.add(faComputer);

  library.add(faKitchenSet);

  return (
    <div className="app">
      <ImageTop />
      <div className = "titre-section">
        <h2>PRÉSENTATION</h2>
        <p><FontAwesomeIcon className = "pad" icon={faPencil} /></p>
      </div>
      <Presentation />
      <div className = "titre-section">
        <h2>TRAVAUX RÉCENTS</h2>
        <p><FontAwesomeIcon className = "pad" icon={faComputer} /></p>
      </div>
      <Works />
      <div className = "titre-section">
        <h2>COMPÉTENCES</h2>
        <p><FontAwesomeIcon className = "pad" icon={faKitchenSet} /></p>
      </div>
      <Skills />
    </div>
  );
}

export default Home;
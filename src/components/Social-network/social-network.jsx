import linkedin from '../../images/logo-linkedin.png';
import './social-network.css';

/* Ce bloc de code
réunit les différents éléments de la
partie "réseaux sociaux" de la page contact */

function Socialnetwork() {
    return (
        <div className = "social">
            <a href="https://www.linkedin.com/in/emma-broudic-347304129/"><img src = {linkedin} className = "linkedin" alt = "logo linkedin" /></a>
            <p className = "rs">Vous pouvez me retrouver sur <a href="https://www.linkedin.com/in/emma-broudic-347304129/">LinkedIn</a></p>
            
        </div>
    )
}

export default Socialnetwork;
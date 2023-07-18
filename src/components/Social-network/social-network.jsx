import linkedin from '../../images/logo-linkedin.png';
import './social-network.css';

/* Ce bloc de code correspond à l'image affichée
au-dessous du header sur la page home.*/

function Socialnetwork() {
    return (
        <div className = "social">
            <img src = {linkedin} className = "linkedin" alt = "logo linkedin" />
            <p>Vous pouvez me retrouver sur LinkedIn</p>
            {/*<a href="https://www.linkedin.com/in/emma-broudic-347304129/"></a> */}
        </div>
    )
}

export default Socialnetwork;
import portrait from '../../images/portrait.jpg';
import './presentation.css';

/* Ce bloc de code correspond à l'image affichée
au-dessous du header sur la page home.*/

function Presentation() {
    return (
        <div className = "presentation">
            <img src = {portrait} className = "portrait" alt = "portrait" />
            <p>Bla bla bla bla bla</p>
        </div>
    )
}

export default Presentation;
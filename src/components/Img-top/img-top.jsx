import img from '../../images/img-top.jpg';
import './img-top.css';

/* Ce bloc de code correspond à l'image affichée
au-dessous du header sur la page home.*/

function Imagetop() {
    return (
        <div className = "image-top">
            <img src = {img} className = "img-top" alt = "img" />
            <h1 className = "text-img-top">Développement web</h1>
        </div>
    )
}

export default Imagetop
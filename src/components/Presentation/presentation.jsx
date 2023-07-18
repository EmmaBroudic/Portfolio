import portrait from '../../images/portrait.jpg';
import './presentation.css';

function Presentation() {
    return (
        <div className = "presentation">
            <div className = "image">
                <img src = {portrait} className = "portrait" alt = "portrait" />
            </div>
            <div className = "text">
                <p className = "pres-text">Après avoir travaillé pendant dix années dans le domaine des bibliothèques et de la documentation, je suis en cours de reconversion professionnelle dans le secteur du développement informatique. Après avoir travaillé pendant dix années dans le domaine des bibliothèques et de la documentation, je suis en cours de reconversion professionnelle dans le secteur du développement informatique.</p>
                <p className = "pres-text">Après avoir travaillé pendant dix années dans le domaine des bibliothèques et de la documentation, je suis en cours de reconversion professionnelle dans le secteur du développement informatique.</p>
            </div>
        </div>
    )
}

export default Presentation;
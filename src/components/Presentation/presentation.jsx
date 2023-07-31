import portrait from '../../images/portrait.jpg';
import './presentation.css';

function Presentation() {
    return (
        <div className = "presentation">
            <img src = {portrait} className = "portrait" alt = "portrait" />
            <p className = "pres-text">Après avoir travaillé pendant dix années dans le domaine des bibliothèques et de la documentation, j'ai choisi de me reconvertir dans le secteur du développement informatique. J'ai commencé à programmer en apprenant Python de façon autonome, puis j'ai décidé de suivre un parcours professionalisant. En décembre 2022, je suis entrée en formation de Développeur web chez OpenClassroom. Formation pendant laquelle j’apprends à gérer des projets web du côté front-end et back-end à l’aide de technologies telles que les langages HTML, CSS et Javascript, la bibliothèque React.JS, la plateforme Node.JS ainsi que le système de base de données MongoDB.</p>
        </div>
    )
}

export default Presentation;
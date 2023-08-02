import portrait from '../../images/portrait.jpg';
import './presentation.css';

/* Ce bloc de code réunit les différents éléments affichés dans
la partie "présentation" de la page home */

function Presentation() {
    return (
        <div className = "presentation">
            <img src = {portrait} className = "portrait" alt = "portrait" />
            <div className = "introducing">
                <p className = "pres-text">Après avoir travaillé pendant dix années dans le domaine des bibliothèques et de la documentation, j'ai choisi de me reconvertir dans le secteur du développement informatique. J'ai commencé à programmer en apprenant Python de façon autonome, puis j'ai décidé de suivre un parcours professionnalisant.</p>
                <p className = "pres-text">En décembre 2022, je suis entrée en formation de Développeur web chez OpenClassroom. Formation pendant laquelle j’ai appris à gérer des projets web du côté front-end et back-end à l’aide de technologies telles que les langages HTML, CSS et Javascript, la bibliothèque React.JS, la plateforme Node.JS ainsi que le système de base de données MongoDB.</p>
                <p className = "pres-text">Au cours de ma carrière, j’ai travaillé à plusieurs reprises dans un environnement international ce qui m’a permis d’acquérir un bon niveau d’anglais professionnel et d’augmenter mes capacités d’adaptation. Je suis d’un naturel curieux, sérieux et j’apprécie le travail en équipe. Par ailleurs, j’ai une appétence pour tout ce qui concerne les aspects visuels d’un projet informatique et suis donc particulièrement intéressée par la partie front-end du développement.</p>
            </div>
        </div>
    )
}

export default Presentation;
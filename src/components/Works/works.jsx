import work1 from '../../images/img1.jpg';
import work2 from '../../images/img2.jpg';
import './works.css';

/* Ce bloc de code réunit les différents éléments présents
dans la partie "travaux récents" de la page home */

function Works() {
    return (
        <div className = "works">
            <div className = "works-bloc">
                <a href="https://emmabroudic.github.io/Projet5/">
                    <img src = {work1} className = "work-one" alt = "site web 1" />
                </a>
                <a href="https://emmabroudic.github.io/Projet5/">
                    <h3 className = "titre-work">Débuggez et optimisez un site de photographe</h3>
                </a>
                <p className = "technos">Corriger le code, le refactoriser et ajouter les éléments nécessaires pour que celui-ci apparaisse dans les premiers résultats sur les moteurs de recherche.</p>
                <p className = "technos">Technologies abordées : HTML, CSS, Javascript, Jquery, utilisation d'outils d'optimisation (waves, etc.)</p>
            </div>
            <div className = "works-bloc">
                <a href="https://github.com/EmmaBroudic/projet7">
                    <img src = {work2} className = "work-two" alt = "site web 2" />
                </a>
                <a href="https://github.com/EmmaBroudic/projet7">
                    <h3 className = "titre-work">Développez le back-end d'un site de notation de livres</h3>
                </a>
                <p className = "technos">Construire la partie back-end d'une application dynamique en JavaSCript à l'aide de l'environnement de travail Node JS et d'une base de données NoSQL.</p>
                <p className = "technos">Technologies abordées : NodeJS, Express, MongoDB, Multer, Sharp, Bcrypt</p>
            </div>
        </div>
    )
}

export default Works;
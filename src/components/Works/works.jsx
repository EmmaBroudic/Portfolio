import work1 from '../../images/img1.jpg';
import work2 from '../../images/img2.jpg';
import './works.css';

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
                <p className = "technos">Description du travail effectué :</p>
                <p className = "technos">Technologies abordées : HTML, CSS, Javascript, Jquery, utilisation d'outils d'optimisation (waves, etc.)</p>
            </div>
            <div className = "works-bloc">
                <a href="https://github.com/EmmaBroudic/projet7">
                    <img src = {work2} className = "work-two" alt = "site web 2" />
                </a>
                <a href="https://github.com/EmmaBroudic/projet7">
                    <h3 className = "titre-work">Développez le back-end d'un site de notation de livres</h3>
                </a>
                <p className = "technos">Description du travail effectué :</p>
                <p className = "technos">Technologies abordées : NodeJS, Express, MongoDB, Multer, Sharp, Bcrypt</p>
            </div>
        </div>
    )
}

export default Works;
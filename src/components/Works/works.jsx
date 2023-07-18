import work1 from '../../images/img1.jpg';
import work2 from '../../images/img2.jpg';
import './works.css';

function Works() {
    return (
        <div className = "works">
            <div className = "works-bloc">
                <img src = {work1} className = "work-one" alt = "site web 1" />
                <h3>Débuggez et optimisez un site de photographe</h3>
                <p className = "technos">HTML, CSS, Javascript, Jquery, utilisation d'outils d'optimisation (waves, etc.)</p>
            </div>
            <div className = "works-bloc">
                <img src = {work2} className = "work-two" alt = "site web 2" />
                <h3>Développez le back-end d'un site de notation de livres</h3>
                <p className = "technos">NodeJS, Express, MongoDB, Multer, Sharp, Bcrypt</p>
            </div>
        </div>
    )
}

export default Works;
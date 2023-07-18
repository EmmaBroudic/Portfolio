import work1 from '../../images/img1.jpg';
import work2 from '../../images/img2.jpg';
import './works.css';

function Works() {
    return (
        <div className = "works">
            <p>Bla bla bla bla bla</p>
            <div className = "works-img">
                <div>
                    <img src = {work1} className = "work-one" alt = "site web 1" />
                    <h3>Projet XXX</h3>
                    <p className = "technos">HTML, CSS, Javascript, Jquery, utilisation d'outils d'optimisation (waves, etc.)</p>
                </div>
                <div>
                    <img src = {work2} className = "work-two" alt = "site web 2" />
                    <h3>Projet XXX</h3>
                    <p className = "technos">NodeJS, Express, MongoDB, Multer, Sharp, Bcrypt</p>
                </div>
            </div>
        </div>
    )
}

export default Works;
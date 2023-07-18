import work1 from '../../images/img1.jpg';
import work2 from '../../images/img2.jpg';
import './works.css';

/* Ce bloc de code correspond à l'image affichée
au-dessous du header sur la page home.*/

function Works() {
    return (
        <div className = "works">
            <p>Bla bla bla bla bla</p>
            <div className = "works-img">
                <img src = {work1} className = "work-one" alt = "site web 1" />
                <img src = {work2} className = "work-two" alt = "site web 2" />
            </div>
        </div>
    )
}

export default Works;
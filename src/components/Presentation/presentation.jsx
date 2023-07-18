import portrait from '../../images/portrait.jpg';
import './presentation.css';

function Presentation() {
    return (
        <div className = "presentation">
            <img src = {portrait} className = "portrait" alt = "portrait" />
            <p>Bla bla bla bla bla</p>
        </div>
    )
}

export default Presentation;
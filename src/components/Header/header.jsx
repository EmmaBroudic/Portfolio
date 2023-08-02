import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div className="header">
            <p className="nom">Emma Broudic</p>
            <nav>
                <NavLink className="menu-left" activeclassname="active" to="/">Home</NavLink>
                <NavLink className="menu-right" activeclassname="active" to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Header;
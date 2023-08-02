import { NavLink } from 'react-router-dom';
import './header.css';

/* Ce bloc de code correspond au header. Le header est visible
sur la page contact et sur la page home. */

function Header() {
    return (
        <div className="header">
            <p className="nom">Emma Broudic</p>
            <nav>
                <NavLink className="menu-left" activeclassname="active" to="Portfolio/">Home</NavLink>
                <NavLink className="menu-right" activeclassname="active" to="Portfolio/contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Header;
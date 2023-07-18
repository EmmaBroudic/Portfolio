import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div className="header">
            <p className="nom">Emma Broudic, développeuse web</p>
            <nav>
                <NavLink className="menu-left" activeClassName="active" to="/">Home</NavLink>
                <NavLink className="menu-right" activeClassName="active" to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Header;
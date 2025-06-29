import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to ="/To-Do">To-Do</Link>
            <Link to="/Counter">Counter</Link>
            <Link to="/About">About</Link>
        </nav>
    )
}

export default Navbar;
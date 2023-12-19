import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Scattered Thoughts</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create" style={ { 
                    color: 'white', 
                    backgroundColor: 'SteelBlue',
                    borderRadius: '5px' 
                } }>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
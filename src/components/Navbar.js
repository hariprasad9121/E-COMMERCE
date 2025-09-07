import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import './Nav.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyShopZone</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;

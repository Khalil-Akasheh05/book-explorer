// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./css/NavBar.css";
function NavBar() {
  return (
    <>
     <nav>
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/books">Books</Link> </li>
        </ul>
     </nav>
    </>
  );
}

export default NavBar;

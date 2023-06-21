import "./navBar.css";
import {Link} from "react-router-dom"

function NavBar() {
  return (
        <nav>
          <h1 className="logo">
            <Link to="/" className="a">Ri<span>zaldy</span></Link>
          </h1>
          <ul id="side-menu">
            <li>
              <Link to="/" className="a">Home</Link>
            </li>
            <li>
              <Link to="/about" className="a">About</Link>
            </li>
            <li>
              <Link to="/portfolio" className="a">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="a">Contact</Link>
            </li>
            {/* <i class="fa-solid fa-times" onclick="closemenu()"></i> */}
          </ul>
          {/* <i class="fa-solid fa-bars" onclick="openmenu()"></i> */}
        </nav>  
  );
}

export default NavBar;

import { Link } from "react-router-dom";
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>Foodie</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link  to="/home">Home</Link>
          </li>
          <li>
            <Link  to="/home/about">About</Link>
          </li>
          <li>
            <Link  to="/home/foods">Foods</Link>
          </li>
          <li>
            <Link  to="/home/addposts">Add Post</Link>
          </li>
          <li>
            <Link  to="/">Log Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

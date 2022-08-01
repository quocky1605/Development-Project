import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div class="topnav" id="myTopnav">
      <NavLink to="/" class="active">
        Home
      </NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};
export default Nav;

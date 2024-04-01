import { Link, NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <nav className="menu">
        <Link to="/">HOME</Link>
        <Link to="/acerca">ACERCA</Link>
        <Link to="/contact">CONTACTO</Link>
        <Link to="/indfsdds">Error 404</Link>
        <Link to="/productos">PRODUCTOS</Link>
        <Link to="/servicios">SERVICIOS</Link>
        <Link to="/listas">LISTAS</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/dashboard">DASHBOARD</Link>
      </nav>
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/acerca"
        >
          ACERCA
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/contact"
        >
          CONTACTO
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/productos"
        >
          PRODUCTOS
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to={"/servicios"}
        >
          SERVICIOS
        </NavLink>
        <NavLink
          to={"/listas"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          LISTAS
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          LOGIN
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          DASHBOARD
        </NavLink>
      </nav>
    </>
  );
};
export default Menu;

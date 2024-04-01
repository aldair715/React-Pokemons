import { Outlet, Link } from "react-router-dom";

const Servicios = () => {
  return (
    <>
      <h1>Servicios</h1>
      <nav className="menu">
        <Link to="/servicios">INICIO</Link>
        <Link to="/servicios/lista">LISTA</Link>
        <Link to="/servicios/garantia">GARANTIA</Link>
        <Link to="/servicios/politicas">POLITICAS</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Servicios;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Productos = ({ productos }) => {
  return (
    <>
      <section>
        <h1>Productos</h1>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
Productos.propTypes = {
  productos: PropTypes.any,
};
export default Productos;

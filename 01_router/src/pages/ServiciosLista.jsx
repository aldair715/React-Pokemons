import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiciosLista = ({ servicios }) => {
  return (
    <>
      <h1>LISTA DE NUESTROS SERVICIOS</h1>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <Link to={`/servicios/${servicio.id}`}>{servicio.servicio}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
ServiciosLista.propTypes = {
  servicios: PropTypes.any,
};
export default ServiciosLista;

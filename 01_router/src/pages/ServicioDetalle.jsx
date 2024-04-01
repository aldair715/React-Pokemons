import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
const ServicioDetalle = ({ servicios }) => {
  const { id } = useParams();

  const servicio = servicios.find((servicio) => servicio.id.toString() === id);
  return (
    <>
      <section>
        <h1>Detalle del SERVICIO</h1>
        <h2>NOMBRE SERVICIO:{servicio.servicio}</h2>
        <h3>ID:{servicio.id}</h3>
        <h4>PRECIO {servicio.precio}</h4>
      </section>
    </>
  );
};
ServicioDetalle.propTypes = {
  servicios: PropTypes.any,
};
export default ServicioDetalle;

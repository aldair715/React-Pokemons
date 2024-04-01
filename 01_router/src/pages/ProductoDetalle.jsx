import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const ProductoDetalle = ({ productos }) => {
  const handleBack = () => {
    navigate(-1);
  };
  const navigate = useNavigate();
  const { id } = useParams();
  let producto = productos.find((producto) => producto.id.toString() === id);
  return (
    <section>
      <h1>Detalle del Producto</h1>
      <h2>NOMBRE PRODUCTO:{producto.nombre}</h2>
      <h3>ID:{producto.id}</h3>
      <h4>PRECIO {producto.precio}</h4>
      <button onClick={handleBack}>REGRESAR</button>
    </section>
  );
};
ProductoDetalle.propTypes = {
  productos: PropTypes.any,
};
export default ProductoDetalle;

import { useLocation, useNavigate } from "react-router-dom";

const Listas = () => {
  const navigate = useNavigate();
  const LIMIT = 20;
  const { search } = useLocation();
  let query = new URLSearchParams(search);
  let start = parseInt(query.get("inicio")) || 1,
    fin = parseInt(query.get("fin")) || LIMIT;

  const handlePrev = () => {
      navigate(`/listas?inicio=${start - LIMIT}&fin=${fin - LIMIT}`);
    },
    handleNext = () => {
      navigate(`/listas?inicio=${start + LIMIT}&fin=${fin + LIMIT}`);
    };
  return (
    <div>
      <h3>LISTAS</h3>
      <p>
        Mostrando Productos del <b>{start}</b>al <b>{fin}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>ATRAS</button>}
      <button onClick={handleNext}>ADELANTE</button>
    </div>
  );
};
export default Listas;

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const CrudApiTableRows = ({ dataRow, num, setDataToEdit, deleteRegister }) => {
  const { id, name, ability, type, avatar } = dataRow;
  let navigate = useNavigate();
  const handleEdit = () => {
    setDataToEdit(dataRow);
    navigate(`editar/${id}`);
  };
  return (
    <tr>
      <td>{num}</td>
      <td>{name}</td>
      <td>{ability.length > 0 ? ability.join(",") : ""}</td>
      <td>{type}</td>
      <td>
        <img src={avatar} alt={name} />
      </td>
      <td>
        <button className="edit" onClick={handleEdit}>
          EDITAR
        </button>
        <button className="delete" onClick={() => deleteRegister(id)}>
          ELIMINAR
        </button>
      </td>
    </tr>
  );
};
CrudApiTableRows.propTypes = {
  dataRow: PropTypes.object,
  num: PropTypes.number,
  setDataToEdit: PropTypes.func,
  deleteRegister: PropTypes.func,
};
export default CrudApiTableRows;

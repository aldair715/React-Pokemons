import PropTypes from "prop-types";
import CrudApiTableRows from "./CrudApiTableRows";
const CrudApiTable = ({ db, setDataToEdit, deleteRegister }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Habilidades</th>
            <th>Type</th>
            <th>Avatar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((el, index) => (
              <CrudApiTableRows
                key={el.id}
                dataRow={el}
                num={index + 1}
                setDataToEdit={setDataToEdit}
                deleteRegister={deleteRegister}
              />
            ))
          ) : (
            <tr>
              <td colSpan={6}>SIN DATOS</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
CrudApiTable.propTypes = {
  db: PropTypes.array,
  setDataToEdit: PropTypes.func,
  deleteRegister: PropTypes.func,
};
export default CrudApiTable;

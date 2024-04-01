import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import options from "../assets/inputOptions.json";
import { useNavigate } from "react-router-dom";
const initialForm = {
  id: null,
  name: "",
  ability: [],
  type: "",
  avatar: "",
};
const CrudApiForm = ({
  dataToEdit,
  setDataToEdit,
  createRegister,
  updateRegister,
}) => {
  const [form, setForm] = useState(initialForm);
  let navigate = useNavigate();
  useEffect(() => {
    dataToEdit ? setForm(dataToEdit) : setForm(initialForm);
  }, [dataToEdit]);
  const handleSubmit = (e) => {
      e.preventDefault();
      if (!form.name || !form.ability || !form.type || !form.avatar) {
        alert("DATOS INCOMPLETOS");
        return;
      }
      form.id === null ? createRegister(form) : updateRegister(form);
      handleReset();
    },
    handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    handleCheck = (e) => {
      const selectedOptions = document.querySelectorAll(
        `#${e.target.id} option:checked`
      );
      const selectedValues = Array.from(selectedOptions).map(
        (option) => option.value
      );
      setForm({ ...form, [e.target.name]: selectedValues });
    },
    handleReset = () => {
      setForm(initialForm);
      setDataToEdit(null);
      navigate("/");
    };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name ? form.name : ""}
          placeholder="Escriba el nombre del pokemon"
          onChange={handleChange}
        />
        <div htmlFor="ability" className="form_wrapper">
          <label>Seleccion la habilidad del pokemon</label>
          <select id="ability" multiple name="ability" onChange={handleCheck}>
            {options.abilities.map((el, index) => (
              <option
                value={el}
                key={index}
                selected={
                  form.ability.find((forel) => forel === el) ? true : false
                }
              >
                {el}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="type">Seleccion el tipo de pokemon</label>
        <div className="form_wrapper" id="type">
          <select name="type" id="type" onChange={handleChange}>
            <option value="">------------</option>
            {options.type.map((el, index) => (
              <option
                key={index}
                value={el}
                selected={el === form.type ? true : false}
              >
                {el}
              </option>
            ))}
          </select>
        </div>

        <input
          type="url"
          name="avatar"
          placeholder="Coloque el url de la imagen del avatar"
          onChange={handleChange}
          value={form.avatar ? form.avatar : ""}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </>
  );
};
CrudApiForm.propTypes = {
  dataToEdit: PropTypes.object,
  setDataToEdit: PropTypes.func,
  createRegister: PropTypes.func,
  updateRegister: PropTypes.func,
};
export default CrudApiForm;

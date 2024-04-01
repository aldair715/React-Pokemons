import { useEffect, useState } from "react";
import CrudApiForm from "./CrudApiForm";
import CrudApiTable from "./CrudApiTable";
import helpHttp from "../helpers/conexion";
import Loader from "./Loader";
import Message from "./Message";
import { HashRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let api = helpHttp(),
    url = "http://localhost:5000/pokemons";
  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.error) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  const createRegister = (data) => {
    data.id = `${Date.now()}`;
    if (!data) return;
    let options = {
      body: data,
      headers: { "Content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      if (!res.error) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
    setDb([...db, data]);
  };
  const updateRegister = (data) => {
    if (!data) return;
    let options = {
        body: data,
        headers: { "Content-type": "application/json" },
      },
      endpoint = `${url}/${data.id}`;
    api.put(endpoint, options).then((res) => {
      if (!res.error) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };
  const deleteRegister = (id) => {
    if (!id) return;
    let isConfirm = confirm(`
      quiere eliminar el registro con el id= ${id}
    `);
    if (isConfirm) {
      let endPoint = `${url}/${id}`,
        options = {
          headers: {
            "Content-type": "application/json",
          },
        };
      api.del(endPoint, options).then((res) => {
        if (!res.error) {
          let newDb = db.filter((el) => el.id !== id);
          setDb(newDb);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  return (
    <>
      <h2>FORMULARIO DE POKEMONS</h2>
      <HashRouter>
        <header>
          <h2>CRUD API CON RUTAS</h2>
          <nav>
            <NavLink
              to="/santos"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              HOME
            </NavLink>
            <NavLink
              to="/agregar"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              AGREGAR
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  {loading && <Loader />}
                  {error && (
                    <Message
                      msg={`Error: ${error.status} ${error.statusText}`}
                    />
                  )}
                  {db && (
                    <CrudApiTable
                      db={db}
                      setDataToEdit={setDataToEdit}
                      deleteRegister={deleteRegister}
                    />
                  )}
                </>
              }
            />
            <Route
              path="agregar"
              element={
                <CrudApiForm
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                  createRegister={createRegister}
                  updateRegister={updateRegister}
                />
              }
            />
            <Route
              path="editar/:id"
              element={
                <CrudApiForm
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                  createRegister={createRegister}
                  updateRegister={updateRegister}
                />
              }
            />
          </Route>
          <Route path="/santos" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </>
  );
};
export default CrudApi;

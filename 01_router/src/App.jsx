import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Error404 from "./pages/Error404";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Servicios from "./pages/Servicios";
import ServiciosLista from "./pages/ServiciosLista";
import ServiciosGarantia from "./pages/ServiciosGarantia";
import ServiciosHome from "./pages/ServiciosHome";
import ServiciosPoliticas from "./pages/ServiciosPoliticas";
import ServicioDetalle from "./pages/ServicioDetalle";
import Listas from "./pages/Listas";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 100 },
    { id: 3, nombre: "Producto 3", precio: 100 },
    { id: 4, nombre: "Producto 4", precio: 100 },
    { id: 5, nombre: "Producto 5", precio: 100 },
  ]);
  const [servicios, setServicios] = useState([
    { id: 1, servicio: "Servicio 1", precio: 1000 },
    { id: 2, servicio: "Servicio 2", precio: 2000 },
    { id: 3, servicio: "Servicio 3", precio: 3000 },
    { id: 4, servicio: "Servicio 4", precio: 4000 },
    { id: 5, servicio: "Servicio 5", precio: 5000 },
    { id: 6, servicio: "Servicio 6", precio: 6000 },
  ]);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/about" element={<Navigate to="/acerca" />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/productos"
              element={<Productos productos={productos} />}
            />
            <Route path="/servicios" element={<Servicios />}>
              <Route index element={<ServiciosHome />} />
              <Route path="garantia" element={<ServiciosGarantia />} />
              <Route
                path="lista"
                element={<ServiciosLista servicios={servicios} />}
              />
              <Route path="politicas" element={<ServiciosPoliticas />} />
              <Route
                path=":id"
                element={
                  <>
                    <ServiciosLista servicios={servicios} />
                    <ServicioDetalle servicios={servicios} />
                  </>
                }
              />
            </Route>
            <Route
              path="/productos/:id"
              element={<ProductoDetalle productos={productos} />}
            />
            <Route path="/listas" element={<Listas />} />
            <Route path="*" element={<Error404 />}></Route>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <hr />
        <HashRouter>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/about" element={<Navigate to="/acerca" />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/productos"
              element={<Productos productos={productos} />}
            />
            <Route path="/servicios" element={<Servicios />}>
              <Route index element={<ServiciosHome />} />
              <Route path="garantia" element={<ServiciosGarantia />} />
              <Route
                path="lista"
                element={<ServiciosLista servicios={servicios} />}
              />
              <Route path="politicas" element={<ServiciosPoliticas />} />
              <Route
                path=":id"
                element={
                  <>
                    <ServiciosLista servicios={servicios} />
                    <ServicioDetalle servicios={servicios} />
                  </>
                }
              />
            </Route>
            <Route
              path="/productos/:id"
              element={<ProductoDetalle productos={productos} />}
            />
            <Route path="/listas" element={<Listas />} />
            <Route path="*" element={<Error404 />}></Route>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;

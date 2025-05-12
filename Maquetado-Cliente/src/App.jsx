import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Productos from "./pages/Productos";
import DetalleCliente from "./pages/DetalleCliente";
import DetalleProducto from "./pages/DetalleProducto";
import BusquedaCliente from "./pages/BusquedaCliente";
import BusquedaProducto from "./pages/BusquedaProducto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/detalle-cliente" element={<DetalleCliente />} />
      <Route path="/detalle-producto" element={<DetalleProducto />} />
      <Route path="/busqueda-cliente" element={<BusquedaCliente />} />
      <Route path="/busqueda-producto" element={<BusquedaProducto />} />
    </Routes>
  );
}

export default App;



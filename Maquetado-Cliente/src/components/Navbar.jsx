import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="font-bold">https://</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/productos">Productos</Link>
      </div>
    </nav>
  );
}
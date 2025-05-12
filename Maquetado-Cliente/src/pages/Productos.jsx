import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Productos() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Listado Productos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Link key={i} to="/detalle-producto">
              <button className="bg-blue-500 text-white w-full py-2 rounded">
                Ver
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

import Navbar from "../components/Navbar";

export default function BusquedaCliente() {
  return (
    <>
      <Navbar />
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Buscar</h2>
        <input
          type="text"
          placeholder="Buscar Cliente"
          className="border p-2 w-full rounded"
        />
      </div>
    </>
  );
}

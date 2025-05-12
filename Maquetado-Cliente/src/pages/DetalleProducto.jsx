import Navbar from "../components/Navbar";

export default function DetalleProducto() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Listado Productos</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <img
            src="https://via.placeholder.com/250x250"
            alt="Imagen producto"
            className="rounded shadow w-full sm:w-1/3"
          />
          <div className="space-y-4 text-justify text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

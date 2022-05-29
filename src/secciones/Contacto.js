import "../App.css";
import FormContacto from "../componentes/FormContacto";
import Maps from "../extra/Maps";

function Contacto() {
  return (
    <>
      <h2 className="tituloList">Contactenos</h2>
      <div className="contContacto">
        <FormContacto />
        <div className="contUbicacion">
          <Maps />
        </div>
      </div>
    </>
  );
}
export default Contacto;

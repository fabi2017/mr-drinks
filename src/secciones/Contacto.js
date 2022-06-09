import "../App.css";
import FormContacto from "../componentes/FormContacto";
import Maps from "../extra/Maps";
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

function Contacto() {
  return (
    <Slide left>
      <h2 className="tituloList">Contactenos</h2>
      <div className="contContacto">
        <FormContacto />
        <div className="contUbicacion">
          <Maps />
        </div>
      </div>
    </Slide>
  );
}
export default Contacto;

import SimpleAccordion from "../extra/Accordion";
import "../App.css"
import Slide from 'react-reveal/Slide';

function Nosotros() {
  return (
    <Slide right>
    <div className="contNosotros">
      <h2 className="tituloList">Sobre Nosotros</h2>    
      <SimpleAccordion />    
    </div>
    </Slide>
  );
}

export default Nosotros;

import ItemListContainer from "../componentes/ItemListContainer";
import Slider from "../extra/Slider";
import Slide from "react-reveal/Slide";


function Home() {
  return (
    <> <Slide right> 
        <h2 className="tituloList">Productos Destacados</h2>
        <ItemListContainer />
        <Slider />
      </Slide>
    </>
  );
}

export default Home;

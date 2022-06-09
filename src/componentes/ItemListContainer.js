import ItemList from "./ItemList";
import Slide from 'react-reveal/Slide';


function ItemListContainer() {
  return (
    <Slide left>
    <div className="containerProd">
      <ItemList />
    </div>
    </Slide>
  );
}

export default ItemListContainer;

import "../estilos/ItemCount.css"
import React, { useState } from "react";
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


function ItemCount({ stock, initial,action,btnAdd}) {
  const [contador, setContador] = useState(1);

  const addStock = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
   const rmvStock = () => {
    if (contador > initial) {
      setContador(contador - 1);     
    }
  };
  return (
    <>
      <div className="item-detail">
          <button className="btnProd" onClick={rmvStock} disabled = { contador <= initial ? true:null} >
            <RemoveIcon sx={{ fontSize: 30 }} />
          </button>
          <div className="count"><p>{contador}</p></div>   
          <button className="btnProd" onClick={addStock} disabled = { contador >= stock ? true:null} >
            <AddIcon sx={{ fontSize: 30 }}/>
          </button>
      </div>  
      <div className="contAdd"> 
       <Button  className="btnStyle2" sx={{ m: 2}} variant="outlined" size="small" color="primary" disabled={btnAdd} onClick={(e) => action(e, contador)}>Agregar al carrito</Button>     
     </div>
    </>
  );
}

export default ItemCount;

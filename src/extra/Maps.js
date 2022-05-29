import * as React from "react";
import GoogleMaps from "simple-react-google-maps"
import "../estilos/Contacto.css"

function Maps (){

    return(
        <>
        <h4>Nuestra Ubicacion</h4>
         <GoogleMaps         
         apiKey={"AIzaSyDij-y7ywcINhyvQM0b_vQ6YzLOgBs_Zd8"}
         style={{height: "100%", width: "100%",  borderRadius: "15px"}}
         zoom={18}
         center={{lat: -31.428080, lng: -64.185076}}         
        markers={{lat: -31.428080, lng: -64.185076}} //optional
         />
     </>       
    )
}

export default Maps
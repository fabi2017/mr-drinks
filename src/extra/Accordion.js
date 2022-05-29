import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import "../App.css"

function SimpleAccordion() {
 
  return (
    <div className="contAccordion">
      <Accordion> 
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h5>¿Quienes somos?</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Somos una tienda con más de 10 años de experiencia en el rubro de las bebidas 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h5>¿Cómo hago para comprar?</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Seleccione los productos que usted desee y luego dirijase al
            "Carrito de Compras"
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h5>¿La compra es confirmada con el envío del formulario?</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Primero confirmamos la disponibilidad de stock del producto,
            luego la forma de pago y  podes pasar por el local a retirar en
            el horario en que está abierto. 
            <br/>
            Lunes a Jueves 12 a 22 hs •  Viernes, Sabados y Domingos de 12 a 00  hs
          </Typography>
        </AccordionDetails>
      </Accordion>     
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h5>¿Qué opciones tengo para pagar?</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             Transferencia Bancaria • MercadoPago y Efectivo
          </Typography>
        </AccordionDetails>
      </Accordion>      
    </div>
  );
}

export default SimpleAccordion;

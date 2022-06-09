import "../estilos/Footer.css";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "@mui/material/Link";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Footer() {


  return (
    <footer className="App-footer">   
      <p>Copyright Mr. Drinks. Todos los derechos reservados.</p>
      <div className="iconFooter">
        <span>Siguenos</span>
        <Link color="inherit" href="https://www.instagram.com/" underline="none">
          <InstagramIcon  sx={{ fontSize: 35, ml: 2 }} />
        </Link>
        <Link color="inherit" href="https://www.facebook.com/" underline="none">
          <FacebookIcon  sx={{ fontSize: 35, ml: 2 }} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

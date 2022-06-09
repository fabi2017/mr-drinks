import Carousel from "react-bootstrap/Carousel";
import "../estilos/Slider.css";

function Slider() {
  return (
    <Carousel className="contSlider" variant="dark">
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="Gancia-logo.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="Miller-logo.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="smirnoff-logo.png" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="Heineken-logo.png" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="Gordons-logo.png" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="andes-logo.png" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

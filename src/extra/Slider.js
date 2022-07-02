import Carousel from "react-bootstrap/Carousel";
import "../estilos/Slider.css";

function Slider() {
  return (
    <Carousel className="contSlider" variant="dark">
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="/Gancia-logo.png" alt="Gancia slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="/Miller-logo.png" alt="Miller slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="/smirnoff-logo.png" alt="Smirnoff slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="/Heineken-logo.png" alt="Heineken slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="/Gordons-logo.png" alt="Gordons slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="/andes-logo.png" alt="Andes slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

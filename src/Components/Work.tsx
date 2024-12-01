import Fruit from "../assets/fruit.png";
import Port from "../assets/port.png";
import Coffee from "../assets/coffee.png";
import Weather from "../assets/weather-dashboard.png";
import Eshop from "../assets/e-shop.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="mywork" className="work">
      <h1 className="green-text flex justify-center mt-28">My Work</h1>
      <Slider {...settings} className="mt-12">
        <div>
          <a
            href="https://santhiyaudhayakumar.github.io/ecom-coffeeshop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Coffee} alt="Coffee" />
          </a>
        </div>
        <div>
          <a
            href="https://santhiyaudhayakumar.github.io/weather-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Weather} alt="Weather" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/santhiyaudhayakumar/Online-Fruit-Store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Fruit} alt="Coffee" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/santhiyaudhayakumar/clothshop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Eshop} alt="ClothShop" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Port} alt="Portfolio" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Work;

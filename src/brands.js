import React from "react";

import img1 from "./images/brands/adidas.svg";
import img2 from "./images/brands/alo.svg";
import img3 from "./images/brands/bershka.svg";
import img4 from "./images/brands/calzed.svg";
import img5 from "./images/brands/chanel.svg";
import img6 from "./images/brands/Dior.svg";
import img7 from "./images/brands/dkny.svg";
import img8 from "./images/brands/hm.svg";
import img9 from "./images/brands/jack.svg";
import img10 from "./images/brands/lacoste.svg";
import img11 from "./images/brands/love.svg";
import img12 from "./images/brands/miumiu.svg";
import img13 from "./images/brands/polo.svg";
import img14 from "./images/brands/prada.svg";
import img15 from "./images/brands/rare.svg";
import img16 from "./images/brands/rhode.svg";
import img17 from "./images/brands/skims.svg";
import img18 from "./images/brands/victoria.svg";
import img19 from "./images/brands/zara.svg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];

const InfiniteCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {/* Повторяем изображения для бесконечной прокрутки */}
        {images.concat(images).map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img className="brand_img" src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;

import { useState } from "react";
import styled from "styled-components";
import previousIcon from "../../images/icon-previous.svg";
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";
import nextIcon from "../../images/icon-next.svg";

const SneakersImages = (): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [product1, product2, product3, product4];

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <ImagesMain>
      <div className="arrow-main">
        <div className="div-arrow" onClick={previousImage}>
          <img className="left-right" src={previousIcon} alt="previous icon" />
        </div>
        <div className="div-arrow" onClick={nextImage}>
          <img className="left-right" src={nextIcon} alt="next icon" />
        </div>
      </div>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            className={`product ${index === currentImageIndex ? "active" : ""}`}
            src={image}
            alt="product image"
          />
        ))}
      </div>
    </ImagesMain>
  );
};

const ImagesMain = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;

  .arrow-main {
    width: 100%;
    position: absolute;
    top: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
    align-items: center;
  }

  .div-arrow {
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .left-right {
    width: 5.71px;
    height: 11.43px;
  }

  .carousel {
    white-space: nowrap;
    overflow-x: hidden;
  }

  .product {
    width: 100%;
    object-fit: cover;
    height: 300px;
    transition: opacity 0.3s ease-in-out;
    display: none;
  }

  .product.active {
    display: flex;
  }

  .product:first-child {
    margin-left: 0px;
  }
`;

export default SneakersImages;

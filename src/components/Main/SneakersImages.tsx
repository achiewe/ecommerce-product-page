import styled from "styled-components";
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";
import previousIcon from "../../images/icon-previous.svg";
import nextIcon from "../../images/icon-next.svg";

const SneakersImages = (): JSX.Element => {
  return (
    <ImagesMain>
      <div className="arrow-main">
        <div className="div-arrow">
          <img className="left-right" src={previousIcon} alt="previous icon" />
        </div>
        <div className="div-arrow">
          <img className="left-right" src={nextIcon} alt="next icon" />
        </div>
      </div>
      <div className="carusel">
        <img className="product" src={product1} alt="product image" />
        <img className="product" src={product2} alt="product image" />
        <img className="product" src={product3} alt="product image" />
        <img className="product" src={product4} alt="product image" />
      </div>
    </ImagesMain>
  );
};

const ImagesMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    border: 3px solid #1d2026;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .carusel {
    white-space: nowrap;
    overflow-x: hidden;
  }
  .product {
    width: 100%;
    object-fit: cover;
    height: 300px;
    margin-left: 14px;
  }

  .product:first-child {
    margin-left: 0px;
  }
`;

export default SneakersImages;

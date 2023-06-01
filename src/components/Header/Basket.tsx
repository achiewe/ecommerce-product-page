import styled from "styled-components";
import imagethumbnail from "../../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../images/icon-delete.svg";
import { useState } from "react";

interface basketProps {
  result: number;
  setResult(result: number): void;
}

const Basket = ({ result, setResult }: basketProps): JSX.Element => {
  const [basketClick, setBasketClick] = useState<boolean>(false);
  const cartClick = () => {
    setBasketClick(!basketClick);
  };

  const overallCost = result * 125;
  return (
    <BasketMain result={result}>
      <svg
        width="22"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        className="cart-svg"
        onClick={cartClick}
      >
        <path
          d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
          fill="#69707D"
          fill-rule="nonzero"
        />
      </svg>
      <div className="count-number"> {result}</div>
      <BasketDiv basketClick={basketClick} result={result}>
        <h3> Cart</h3>
        <hr />
        {result === 0 ? (
          <p className="empty-p"> Your cart is empty.</p>
        ) : (
          <div className="main-prodres">
            <div className="product-result">
              <img
                className="image-thumbnail"
                src={imagethumbnail}
                alt="thumbnail image"
              />
              <div className="product-cost">
                <p className="limit-edition">Fall Limited Edition Sneakers </p>
                <p className="final-price">
                  $125.00 x {result} <span>${overallCost.toFixed(2)}</span>
                </p>
              </div>

              <img
                onClick={() => {
                  setResult(0);
                }}
                className="trash"
                src={deleteIcon}
                alt="delete icon"
              />
            </div>
            <button> Checkout</button>
          </div>
        )}
      </BasketDiv>
    </BasketMain>
  );
};

const BasketMain = styled.div<{ result: number }>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  .cart-svg:hover path {
    cursor: pointer;
    fill: #1d2026;
  }

  .count-number {
    width: 19px;
    height: 13px;
    background-color: #ff7e1b;
    border-radius: 6.5px;
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: center;
    position: absolute;
    display: ${(props) => (props.result === 0 ? "none" : "block")};
    top: -5px;
    left: 10px;
    color: #ffffff;
  }
`;

const BasketDiv = styled.div<{ basketClick: boolean; result: number }>`
  width: 360px;
  height: ${(props) => (props.result === 0 ? "256px" : "none")};
  background-color: #ffffff;
  gap: 27px;
  display: ${(props) => (props.basketClick ? "flex" : "none")};
  position: absolute;
  top: 76px;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  right: -63px;
  margin: auto 0;
  z-index: 1;
  border-radius: 10px;
  padding: 24px 0 32px 0;
  transition: transform 0.5s ease-in-out;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 1024px) {
    right: -170px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    padding-left: 24px;
    color: #1d2026;
  }

  hr {
    height: 1px;
    width: 100%;
    background-color: #e4e9f2;
    opacity: 0.25;
  }

  .empty-p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    margin-top: 50px;
    color: #69707d;
  }

  .main-prodres {
    display: flex;
    width: 100%;
    padding: 24px 24px 0 24px;
    flex-direction: column;
    gap: 24px;

    .product-result {
      display: flex;
      width: 100%;
      flex-direction: row;
      gap: 16px;
      align-items: center;

      .image-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: 4px;
      }

      .product-cost {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .limit-edition {
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0px;
          text-align: left;
          color: #69707d;
        }

        .final-price {
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0px;
          text-align: left;
          color: #69707d;

          span {
            font-size: 16px;
            font-weight: 700;
            line-height: 26px;
            letter-spacing: 0px;
            text-align: left;
            color: #1d2026;
          }
        }
      }

      .trash {
        width: 14px;
        height: 16px;
      }
    }

    button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 22px 0 18px 0;
      background-color: #ff7e1b;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
      color: #ffffff;
    }
  }
`;
export default Basket;

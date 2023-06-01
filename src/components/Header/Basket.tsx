import styled from "styled-components";
import cartSvg from "../../images/icon-cart.svg";
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
    <BasketMain>
      <img
        className="cart-svg"
        onClick={cartClick}
        src={cartSvg}
        alt="cartSvg"
      />
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

const BasketMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  right: 7.5px;
  margin: auto 0;
  z-index: 1;
  border-radius: 10px;
  padding: 24px 0 32px 0;
  transition: transform 0.5s ease-in-out;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

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

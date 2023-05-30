import styled from "styled-components";
import iconMinus from "../../images/icon-minus.svg";
import iconPlus from "../../images/icon-plus.svg";

const PriceProduct = (): JSX.Element => {
  return (
    <PriceMain>
      <div className="price-div">
        <div className="price-number">
          <h1> $125.00</h1>
          <div className="product-sale"> 50%</div>
        </div>
        <h3> $250.00</h3>
      </div>
      <div className="count-main">
        <div className="count-price">
          <button className="button-plusmin">
            <img src={iconMinus} alt="minus icon" />
          </button>
          <h5> 0</h5>
          <button className="button-plusmin">
            <img src={iconPlus} alt="minus icon" />
          </button>
        </div>
        <button className="cart-button">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#FFFFFF"
              fill-rule="nonzero"
            />
          </svg>
          <h2> Add to cart</h2>
        </button>
      </div>
    </PriceMain>
  );
};

const PriceMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 24px;
  max-width: 500px;
  gap: 26px;

  .price-div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .price-number {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 16px;
      justify-content: flex-start;
      align-items: center;

      h1 {
        font-size: 28px;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 0px;
        text-align: left;
        color: #1d2026;
      }

      .product-sale {
        height: 27px;
        width: 51px;
        border-radius: 6px;
        background-color: #ffeee2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0px;
        color: #ff7e1b;
      }
    }

    h3 {
      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: left;
      color: #b6bcc8;
      text-decoration-line: line-through;
    }
  }

  .count-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;

    .count-price {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #f6f8fd;
      border-radius: 10px;
      padding: 21px 24px;

      .button-plusmin {
        border: none;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h5 {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: center;
        color: #1d2026;
      }
    }

    .cart-button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      padding: 20px 0;
      border: none;
      border-radius: 10px;
      background-color: #ff7e1b;
      box-shadow: 0px 20px 50px -20px #ff7e1b;

      h2 {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0px;
        color: #ffffff;
      }
    }
  }
`;
export default PriceProduct;

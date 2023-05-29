import styled from "styled-components";
import cartSvg from "../images/icon-cart.svg";

const Basket = (): JSX.Element => {
  return (
    <BasketMain>
      <img src={cartSvg} alt="cartSvg" />
      <BasketDiv>
        <h3> Cart</h3>
        <hr />
        <p> Your cart is empty.</p>
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

const BasketDiv = styled.div`
  width: 360px;
  height: 256px;
  background-color: #ffffff;
  gap: 27px;
  display: flex;
  position: absolute;
  top: 76px;
  right: 0;
  left: 0;
  margin: auto 0;
  border-radius: 10px;
  padding: 24px 0 32px 0;
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

  p {
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
`;
export default Basket;

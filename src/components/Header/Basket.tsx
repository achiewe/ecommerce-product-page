import styled from "styled-components";
import cartSvg from "../../images/icon-cart.svg";
import { useState } from "react";

interface basketProps {
  result: number;
  setResult: (result: number) => void;
}

const Basket = ({}: basketProps): JSX.Element => {
  const [basketClick, setBasketClick] = useState<boolean>(false);
  const cartClick = () => {
    setBasketClick(!basketClick);
  };
  return (
    <BasketMain>
      <img onClick={cartClick} src={cartSvg} alt="cartSvg" />
      <BasketDiv basketClick={basketClick}>
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

const BasketDiv = styled.div<{ basketClick: boolean }>`
  width: 360px;
  height: 256px;
  background-color: #ffffff;
  gap: 27px;
  display: ${(props) => (props.basketClick ? "flex" : "none")};
  position: absolute;
  top: 76px;
  left: 0%;
  right: 0%;
  margin: auto 0;
  z-index: 1;
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

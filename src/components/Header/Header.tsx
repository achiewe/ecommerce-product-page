import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import Logo from "../../../src/images/logo.svg";
import avatarPng from "../../../src/images/image-avatar.png";
import Basket from "./Basket";

interface headerProps {
  result: number;
  setResult: (result: number) => void;
  isClicked: boolean;
  setIsClicked(isClicked: boolean): void;
}

const Header = ({
  result,
  setResult,
  isClicked,
  setIsClicked,
}: headerProps): JSX.Element => {
  const handleClick = () => {
    location.reload();
  };
  return (
    <HeaderMain>
      <div className="burger-title">
        <BurgerMenu isClicked={isClicked} setIsClicked={setIsClicked} />
        <div className="interface-burger">
          <h2> Collections</h2>
          <h2> Men</h2>
          <h2> Women</h2>
          <h2> About</h2>
          <h2> Contact</h2>
        </div>
        <img
          className="logo-svg"
          src={Logo}
          alt="logo svg"
          onClick={handleClick}
        />
      </div>
      <div className="basket-profile">
        <Basket result={result} setResult={setResult} />
        <img className="avatar-png" src={avatarPng} alt="avatar png" />
      </div>
    </HeaderMain>
  );
};

const HeaderMain = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 24px 0 24px;
  margin-bottom: 28px;
  align-items: center;
  @media (min-width: 1024px) {
    max-width: 1110px;
    padding: 0;
  }
  .burger-title {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
      gap: 56px;
      flex-direction: row-reverse;
    }

    .logo-svg {
      cursor: pointer;
    }

    .interface-burger {
      display: none;
      @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 32px;
      }
      h2 {
        font-size: 15px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: left;
        color: #69707d;
        cursor: pointer;
      }
    }
  }

  .basket-profile {
    display: flex;
    flex-direction: row;
    gap: 22px;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
      gap: 46px;
    }

    .avatar-png {
      width: 24px;
      height: 24px;
      @media (min-width: 1024px) {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export default Header;

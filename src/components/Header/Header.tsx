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
      <div className="header-container">
        <div className="burger-title">
          <BurgerMenu isClicked={isClicked} setIsClicked={setIsClicked} />
          <div className="interface-burger">
            <div className="choose-page">
              <h2> Collections</h2>
              <div className="hover"></div>
            </div>

            <div className="choose-page">
              <h2> Men</h2>
              <div className="hover"></div>
            </div>

            <div className="choose-page">
              <h2> Women</h2>
              <div className="hover"></div>
            </div>

            <div className="choose-page">
              <h2> About</h2>
              <div className="hover"></div>
            </div>

            <div className="choose-page">
              <h2> Contact</h2>
              <div className="hover"></div>
            </div>
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
      </div>
      <hr />
    </HeaderMain>
  );
};

const HeaderMain = styled.header`
  width: 100%;
  display: flex;
  padding: 24px 24px 0 24px;
  margin-bottom: 28px;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    max-width: 1110px;
    padding: 0;
    flex-direction: column;
    gap: 49px;
    margin-bottom: 90px;
  }

  .header-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
      .choose-page {
        @media (min-width: 1024px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hover {
          height: 4px;
          background-color: #ff7e1b;
          position: absolute;
          display: none;
        }

        h2 {
          font-size: 15px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0px;
          text-align: left;
          color: #69707d;
          cursor: pointer;
          :hover {
            color: #1d2026;
          }
        }

        &:hover .hover {
          width: 100%;
          display: block;
          bottom: -62px;
        }
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

  .avatar-png:hover {
    border: 2px solid #ff7e1b;
    border-radius: 50%;
    cursor: pointer;
  }

  hr {
    display: none;
    @media (min-width: 1024px) {
      display: block;
      width: 100%;
      border: none;
      height: 1px;
      background-color: #e4e9f2;
    }
  }
`;

export default Header;

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

  .burger-title {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }

  .basket-profile {
    display: flex;
    flex-direction: row;
    gap: 22px;
    align-items: center;
    justify-content: center;

    .avatar-png {
      width: 24px;
      height: 24px;
    }
  }
`;

export default Header;

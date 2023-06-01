import styled from "styled-components";
import MenuSvg from "../../../src/images/icon-menu.svg";
import closeSvg from "../../images/icon-close.svg";

interface burgerProps {
  isClicked: boolean;
  setIsClicked(isClicked: boolean): void;
}

const BurgerMenu = ({ isClicked, setIsClicked }: burgerProps): JSX.Element => {
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <BurgerMain>
      <div className="overlay"></div>
      <img
        onClick={handleClick}
        className="menu-svg"
        src={MenuSvg}
        alt="menu svg"
      />
      <MenuDiv isClicked={isClicked}>
        <img
          className="close-svg"
          onClick={handleClick}
          src={closeSvg}
          alt="close svg"
        />
        <div className="burger-info">
          <h2> Collections</h2>
          <h2> Men</h2>
          <h2> Women</h2>
          <h2> About</h2>
          <h2> Contact</h2>
        </div>
      </MenuDiv>
    </BurgerMain>
  );
};

const BurgerMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    display: none;
  }

  .menu-svg {
    cursor: pointer;
  }
`;

const MenuDiv = styled.div<{ isClicked: boolean }>`
  display: flex;
  width: 250px;
  height: 100vh;
  position: ${(props) => (props.isClicked ? "absolute" : "fixed")};
  background-color: white;
  flex-direction: column;
  gap: 54px;
  padding: 25px 0 0 25px;
  justify-content: flex-start;
  z-index: 1;
  align-items: flex-start;
  left: ${(props) => (props.isClicked ? "0" : "-300px")};
  top: 0;

  .close-svg {
    cursor: pointer;
  }

  .burger-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: left;
      color: #1d2026;
    }
  }
`;
export default BurgerMenu;

import styled from "styled-components";
import MenuSvg from "../../src/images/icon-menu.svg";

const BurgerMenu = (): JSX.Element => {
  return (
    <BurgerMain>
      <img className="menu-svg" src={MenuSvg} alt="menu svg" />
    </BurgerMain>
  );
};

const BurgerMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default BurgerMenu;

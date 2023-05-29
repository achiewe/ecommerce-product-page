import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import Logo from "../../src/images/logo.svg";

const Header = (): JSX.Element => {
  return (
    <HeaderMain>
      <div className="burger-title">
        <BurgerMenu />
        <img src={Logo} alt="logo svg" />
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
  align-items: center;

  .burger-title {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
`;

export default Header;

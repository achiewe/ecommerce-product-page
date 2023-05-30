import styled from "styled-components";
import SneakersImages from "./SneakersImages";
import SneakersInfo from "./SneakersInfo";
import PriceProduct from "./PriceProduct";

const MainSneakers = (): JSX.Element => {
  return (
    <SneakersMain>
      <SneakersImages />
      <SneakersInfo />
      <PriceProduct />
    </SneakersMain>
  );
};

const SneakersMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default MainSneakers;

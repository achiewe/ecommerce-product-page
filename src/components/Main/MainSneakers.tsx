import styled from "styled-components";
import SneakersImages from "./SneakersImages";

const MainSneakers = (): JSX.Element => {
  return (
    <SneakersMain>
      <SneakersImages />
    </SneakersMain>
  );
};

const SneakersMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
export default MainSneakers;

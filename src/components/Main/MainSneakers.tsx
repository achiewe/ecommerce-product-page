import styled from "styled-components";
import SneakersImages from "./SneakersImages";
import SneakersInfo from "./SneakersInfo";
import SneakersImgDesk from "./SneakersImgDesk";

interface PropsSneakers {
  calculate: number;
  setCalculate: (calculate: number) => void;
  result: number;
  setResult(result: number): void;
  activateOverlay: boolean;
  setActivateOverlay(activateOverlay: boolean): void;
}

const MainSneakers = ({
  calculate,
  setCalculate,
  result,
  setResult,
  activateOverlay,
  setActivateOverlay,
}: PropsSneakers): JSX.Element => {
  return (
    <SneakersMain>
      <SneakersImages />
      <SneakersImgDesk
        activateOverlay={activateOverlay}
        setActivateOverlay={setActivateOverlay}
      />
      <SneakersInfo
        calculate={calculate}
        setCalculate={setCalculate}
        result={result}
        setResult={setResult}
      />
    </SneakersMain>
  );
};

const SneakersMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1110px;
    gap: 125px;
    padding-bottom: 132px;
  }
`;
export default MainSneakers;

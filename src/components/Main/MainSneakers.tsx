import styled from "styled-components";
import SneakersImages from "./SneakersImages";
import SneakersInfo from "./SneakersInfo";
import SneakersImgDesk from "./SneakersImgDesk";

interface PropsSneakers {
  calculate: number;
  setCalculate: (calculate: number) => void;
  result: number;
  setResult(result: number): void;
}

const MainSneakers = ({
  calculate,
  setCalculate,
  result,
  setResult,
}: PropsSneakers): JSX.Element => {
  return (
    <SneakersMain>
      <SneakersImages />
      <SneakersImgDesk />
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
  }
`;
export default MainSneakers;

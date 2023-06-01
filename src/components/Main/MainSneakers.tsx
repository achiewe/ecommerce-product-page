import styled from "styled-components";
import SneakersImages from "./SneakersImages";
import SneakersInfo from "./SneakersInfo";
import PriceProduct from "./PriceProduct";

interface PropsMain {
  calculate: number;
  setCalculate: (calculate: number) => void;
  result: number;
  setResult(result: number): void;
}

const MainSneakers = ({
  calculate,
  setCalculate,
  setResult,
  result,
}: PropsMain): JSX.Element => {
  return (
    <SneakersMain>
      <SneakersImages />
      <SneakersInfo />
      <PriceProduct
        calculate={calculate}
        setCalculate={setCalculate}
        setResult={setResult}
        result={result}
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
`;
export default MainSneakers;

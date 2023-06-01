import styled from "styled-components";
import PriceProduct from "./PriceProduct";

interface PropsProduct {
  calculate: number;
  setCalculate: (calculate: number) => void;
  result: number;
  setResult(result: number): void;
}

const SneakersInfo = ({
  calculate,
  setCalculate,
  result,
  setResult,
}: PropsProduct): JSX.Element => {
  return (
    <MainInfo>
      <div className="sneakers-company">
        <h3> Sneaker Company</h3>
        <h2> Fall Limited Edition Sneakers</h2>
      </div>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <PriceProduct
        calculate={calculate}
        setCalculate={setCalculate}
        setResult={setResult}
        result={result}
      />
    </MainInfo>
  );
};

const MainInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 24px;
  margin-bottom: 28px;
  gap: 15px;
  padding: 0 24px;
  @media (min-width: 1024px) {
    padding: 0;
    gap: 30px;
    margin: 0;
  }

  .sneakers-company {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 19px;
    @media (min-width: 1024px) {
      gap: 27px;
    }

    h3 {
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 1.8461538553237915px;
      color: #ff7e1b;
      text-transform: uppercase;
      @media (min-width: 1024px) {
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 2px;
        text-align: left;
      }
    }

    h2 {
      font-size: 28px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
      color: #1d2026;
      @media (min-width: 1024px) {
        font-size: 44px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    color: #69707d;
    @media (min-width: 1024px) {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
`;
export default SneakersInfo;

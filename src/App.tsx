import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import MainSneakers from "./components/Main/MainSneakers";
import { useState } from "react";

function App(): JSX.Element {
  const [calculate, setCalculate] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  return (
    <MainContainer>
      <GlobalStyles />
      <Header result={result} setResult={setResult} />
      <MainSneakers
        calculate={calculate}
        setCalculate={setCalculate}
        result={result}
        setResult={setResult}
      />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export default App;

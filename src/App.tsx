import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import MainSneakers from "./components/Main/MainSneakers";
import { useState } from "react";

function App(): JSX.Element {
  const [calculate, setCalculate] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [activateOverlay, setActivateOverlay] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);

  return (
    <MainContainer>
      <GlobalStyles />
      <Overlay isClicked={isClicked} activateOverlay={activateOverlay} />
      <Header
        result={result}
        setResult={setResult}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <MainSneakers
        calculate={calculate}
        setCalculate={setCalculate}
        result={result}
        setResult={setResult}
        activateOverlay={activateOverlay}
        setActivateOverlay={setActivateOverlay}
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

const Overlay = styled.div<{ isClicked: boolean; activateOverlay: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.75;
  position: absolute;
  display: ${(props) => (props.isClicked ? "block" : "none")};
  z-index: 1;
  @media (min-width: 1024px) {
    display: ${(props) => (props.activateOverlay ? "block" : "none")};
  }
`;

export default App;

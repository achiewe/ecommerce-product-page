import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <MainContainer>
      <GlobalStyles />
      <Header />
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

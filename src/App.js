import styled from "styled-components";
import PersonalInfo from "./Components/PersonalInfo";
import Tabs from "./Components/Tabs";

function App() {
  return (
    < AppStyled>
      <div className="tabs-con">
        <PersonalInfo />
        <Tabs />
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 10rem 5rem;

  .tabs-con{
    display: grid;
    min-height: 10vh;
    width: 100%;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 2rem;
  }
`;

export default App;

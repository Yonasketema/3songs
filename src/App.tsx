import styled from "styled-components";
import SideBar from "./components/SideBar";
import SongStats from "./components/SongStats";
import SongsContainer from "./components/SongsContainer";
import Header from "./components/Header";

const StyledMain = styled.main`
  height: 88vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  grid-template-rows: 1fr 1fr;
  gap: 2.4rem;
  padding-right: 0;
  padding: 0 1rem;
`;

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <SongStats />
        <SongsContainer />
        <SideBar />
      </StyledMain>
    </>
  );
}

export default App;

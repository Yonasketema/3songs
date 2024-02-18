import styled from "styled-components";
import SideBar from "./components/SideBar";
import SongStats from "./components/SongStats";
import SongsContainer from "./components/SongsContainer";
import Header from "./components/Header";

const StyledMain = styled.main`
  height: 88vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr 1fr;
  padding-right: 0;
  padding: 0 1rem;
`;
const INBOX = styled.div`
  overflow-y: scroll;
  height: 88vh;
  padding: 1.7rem 1rem;
`;

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <INBOX>
          <SongStats />
          <SongsContainer />
        </INBOX>
        <SideBar />
      </StyledMain>
    </>
  );
}

export default App;

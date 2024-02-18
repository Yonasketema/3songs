import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import Row from "./Row";
import AlbumTable from "./AlbumTable";
import { useState } from "react";
import ArtistTable from "./ArtistTable";

const StyledSideBar = styled.aside`
  grid-row: 1 / -1;
  grid-column: 2/3;
  padding: 1rem 1.7rem;
`;

const SideBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
`;

function SideBar() {
  const [next, setNext] = useState(false);
  return (
    <StyledSideBar>
      <SideBarHeader>
        {next ? <h1>Album</h1> : <h1>Artist</h1>}
        <Row>
          <ArrowButton
            onClick={() => setNext((state) => !state)}
            disabled={!next}
          >
            &lt;
          </ArrowButton>
          <ArrowButton
            onClick={() => setNext((state) => !state)}
            disabled={next}
          >
            &gt;
          </ArrowButton>
        </Row>
      </SideBarHeader>
      {next ? <AlbumTable /> : <ArtistTable />}
    </StyledSideBar>
  );
}

export default SideBar;

import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import Row from "./Row";
import AlbumTable from "./AlbumTable";
import { useState } from "react";
import ArtistTable from "./ArtistTable";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

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

const Title = styled.h3`
  color: var(--color-grey-500);
`;

function SideBar() {
  const [next, setNext] = useState(false);
  return (
    <StyledSideBar>
      <SideBarHeader>
        {next ? <Title>Albums</Title> : <Title>Artists</Title>}
        <Row>
          <ArrowButton
            onClick={() => setNext((state) => !state)}
            disabled={!next}
          >
            <BiLeftArrow />
          </ArrowButton>
          <ArrowButton
            onClick={() => setNext((state) => !state)}
            disabled={next}
          >
            <BiRightArrow />
          </ArrowButton>
        </Row>
      </SideBarHeader>
      {next ? <AlbumTable /> : <ArtistTable />}
    </StyledSideBar>
  );
}

export default SideBar;

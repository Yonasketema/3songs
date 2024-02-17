import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import Row from "./Row";
import AlbumTable from "./AlbumTable";

const StyledSideBar = styled.aside`
  grid-row: 1 / -1;
  grid-column: 2/3;
`;

const SideBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
`;

function SideBar() {
  return (
    <StyledSideBar>
      <SideBarHeader>
        <h3>Album Statics</h3>
        <Row>
          <ArrowButton>&lt;</ArrowButton>
          <ArrowButton>&gt;</ArrowButton>
        </Row>
      </SideBarHeader>
      <AlbumTable />
    </StyledSideBar>
  );
}

export default SideBar;

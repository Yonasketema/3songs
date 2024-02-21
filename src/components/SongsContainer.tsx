import styled from "styled-components";
import SongFilter from "./SongFilter";
import SongTable from "./SongTable";

const StyledSongsContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function SongsContainer() {
  return (
    <StyledSongsContainer
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <SongFilter />
      <SongTable />
    </StyledSongsContainer>
  );
}

export default SongsContainer;

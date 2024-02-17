import styled from "styled-components";
import StatusBox from "./StatusBox";

const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const SongStatus = styled.section`
  display: flex;
  gap: 3.2rem;
`;

function SongStats() {
  return (
    <SongStatus>
      <StatusContainer>
        <StatusBox />
        <StatusBox />
        <StatusBox />
        <StatusBox />
      </StatusContainer>

      <div>PI</div>
    </SongStatus>
  );
}

export default SongStats;

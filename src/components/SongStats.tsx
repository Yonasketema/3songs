import styled from "styled-components";
import StatusBox from "./StatusBox";
import GenreChart from "./GenreChart";

const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 40%;
`;
const Chart = styled.div`
  width: 60%;
`;
const SongStatus = styled.section`
  display: flex;

  gap: 3.2rem;
`;

const data = [
  {
    label: "songs",
    number: 14323,
  },
  {
    label: "album",
    number: 1232,
  },
  {
    label: "genre",
    number: 12,
  },
  {
    label: "artist",
    number: 52,
  },
];

function SongStats() {
  return (
    <SongStatus>
      <StatusContainer>
        {data.map((d) => (
          <StatusBox data={d} />
        ))}
      </StatusContainer>
      <Chart>
        <GenreChart />
      </Chart>
    </SongStatus>
  );
}

export default SongStats;

import styled from "styled-components";
import StatusBox from "./StatusBox";
import GenreChart from "./GenreChart";
import { AppDispatch, RootState } from "../state/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSongStats } from "../state/song/songStatsSlice";
import { useEffect } from "react";

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

const labels = ["songs", "album", "genre", "artist"];

function SongStats() {
  const songStats = useSelector(
    (state: RootState) => state.SongStats.songStats
  );

  const dispatch = useDispatch<AppDispatch>();

  const data = labels.map((label) => ({
    label,
    number: songStats[label],
  }));

  useEffect(() => {
    dispatch(fetchSongStats());
  }, [dispatch]);

  return (
    <SongStatus>
      <StatusContainer>
        {data.map((d) => (
          <StatusBox data={d} key={d.label} />
        ))}
      </StatusContainer>
      <Chart>
        <GenreChart />
      </Chart>
    </SongStatus>
  );
}

export default SongStats;

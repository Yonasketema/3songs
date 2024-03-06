import styled from "styled-components";
import ArtistRow from "./ArtistRow";
import { Table as baseTable, TableHeader as baseHeader } from "./Table";
import { AppDispatch, RootState } from "../state/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchArtistStats } from "../state/song/songStatsSlice";

const Table = styled(baseTable)`
  grid-template-columns: 1fr 1fr 1fr;
`;
const TableHeader = styled(baseHeader)`
  grid-template-columns: 1fr 1fr 1fr;
`;

const TableList = styled.div`
  height: 70vh;
  overflow-y: auto;
`;

function ArtistTable() {
  const albumStats = useSelector(
    (state: RootState) => state.SongStats.artistStats
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchArtistStats());
  }, [dispatch]);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Artist</div>
        <div>Total Songs</div>
        <div>Album</div>
      </TableHeader>
      <TableList>
        {albumStats?.map((song) => (
          <ArtistRow song={song} key={song.artist} />
        ))}
      </TableList>
    </Table>
  );
}

export default ArtistTable;

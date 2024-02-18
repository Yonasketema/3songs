import styled from "styled-components";
import AlbumRow from "./AlbumRow";
import { Table as baseTable, TableHeader as baseHeader } from "./Table";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAlbumStats } from "../state/song/songStatsSlice";

const Table = styled(baseTable)`
  grid-template-columns: 1fr 1fr 1fr;
  height: 77%;
`;
const TableHeader = styled(baseHeader)`
  grid-template-columns: 1fr 1fr 1fr;
`;
const TableList = styled.div`
  height: 100%;
  overflow-y: auto;
`;

function AlbumTable() {
  const albumStats = useSelector(
    (state: RootState) => state.SongStats.albumStats
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAlbumStats());
  }, [dispatch]);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Album</div>
        <div>Artist</div>
        <div>Tracks</div>
      </TableHeader>
      <TableList>
        {albumStats?.map((song) => (
          <AlbumRow song={song} key={song.album} />
        ))}
      </TableList>
    </Table>
  );
}

export default AlbumTable;

import SongRow from "./SongRow";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Table, TableHeader } from "./Table";
import Spinner from "./Spinner";

function SongTable() {
  const { songs, isLoadingFetchSong } = useSelector(
    (state: RootState) => state.song
  );

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Title</div>
        <div>Artist</div>
        <div>Album</div>
        <div>Genre</div>
      </TableHeader>
      {isLoadingFetchSong ? (
        <Spinner />
      ) : (
        songs.map((song) => <SongRow song={song} key={song.id} />)
      )}
    </Table>
  );
}

export default SongTable;

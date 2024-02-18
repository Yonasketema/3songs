import SongRow from "./SongRow";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSongs } from "../state/song/songSlice";
import { Table, TableHeader } from "./Table";

function SongTable() {
  const { songs, isLoading } = useSelector((state: RootState) => state.song);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Title</div>
        <div>Artist</div>
        <div>Album</div>
        <div>Genre</div>
      </TableHeader>

      {songs.map((song) => (
        <SongRow song={song} key={song.id} />
      ))}
    </Table>
  );
}

export default SongTable;

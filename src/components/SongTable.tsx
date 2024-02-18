import styled from "styled-components";
import SongRow from "./SongRow";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSongs } from "../state/song/songSlice";

const Table = styled.div`
  border: 1px solid var(--color-grey-100);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);

  /* height: 27rem;
  overflow: hidden; */
`;
const TableList = styled.div`
  /* overflow-y: auto;
  height: 21.7rem; */
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr 0.8fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function SongTable() {
  const { songs, isLoading } = useSelector((state: RootState) => state.song);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  console.log({ songs, isLoading });
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Title</div>
        <div>Artist</div>
        <div>Album</div>
        <div>Genre</div>
      </TableHeader>
      <TableList>
        {songs.map((song) => (
          <SongRow song={song} key={song.id} />
        ))}
      </TableList>
    </Table>
  );
}

export default SongTable;

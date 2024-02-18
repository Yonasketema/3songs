import styled from "styled-components";
import { Primary, Secondary, TableRow as baseRow } from "./Table";

const TableRow = styled(baseRow)`
  grid-template-columns: 1fr 1fr 1fr;
`;

function AlbumRow({ song }) {
  return (
    <TableRow>
      <Primary>{song.album}</Primary>
      <Secondary>{song.artist}</Secondary>
      <Secondary>{song.songs}</Secondary>
    </TableRow>
  );
}

export default AlbumRow;

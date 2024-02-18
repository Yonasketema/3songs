import styled from "styled-components";

import { Primary, Secondary, TableRow as baseRow } from "./Table";

const TableRow = styled(baseRow)`
  grid-template-columns: 1fr 1fr 1fr;
`;

function ArtistRow({ song }) {
  return (
    <TableRow>
      <Primary>{song.artist} </Primary>
      <Secondary>{song.album}</Secondary>
      <Secondary>{song.songs}</Secondary>
    </TableRow>
  );
}

export default ArtistRow;

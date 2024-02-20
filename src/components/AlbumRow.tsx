import styled from "styled-components";
import { Primary, Secondary, TableRow as baseRow } from "./Table";

import { allStat } from "../state/song/songStatsSlice";

const TableRow = styled(baseRow)`
  grid-template-columns: 1fr 1fr 1fr;
`;

type AlbumRowProps = {
  song: allStat;
};

const AlbumRow = ({ song }: AlbumRowProps) => {
  return (
    <TableRow>
      <Primary>{song.album}</Primary>
      <Secondary>{song.artist}</Secondary>
      <Secondary>{song.songs}</Secondary>
    </TableRow>
  );
};

export default AlbumRow;

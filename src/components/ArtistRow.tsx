import styled from "styled-components";

import { Primary, Secondary, TableRow as baseRow } from "./Table";
import { allStat } from "../state/song/songStatsSlice";

const TableRow = styled(baseRow)`
  grid-template-columns: 1fr 1fr 1fr;
`;

type ArtistRowProps = {
  song: allStat;
};

const ArtistRow = ({ song }: ArtistRowProps) => {
  return (
    <TableRow>
      <Primary>{song.artist} </Primary>
      <Secondary>{song.songs}</Secondary>
      <Secondary>{song.album}</Secondary>
    </TableRow>
  );
};

export default ArtistRow;

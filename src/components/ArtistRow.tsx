import styled from "styled-components";

import { Primary, Secondary, TableRow as baseRow } from "./Table";

const TableRow = styled(baseRow)`
  grid-template-columns: 1fr 1fr 1fr;
`;

function ArtistRow() {
  return (
    <TableRow>
      <Primary>Teddyafro</Primary>
      <Secondary>14</Secondary>
      <Secondary>12</Secondary>
    </TableRow>
  );
}

export default ArtistRow;

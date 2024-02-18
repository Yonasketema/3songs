import styled from "styled-components";
import { Primary, Secondary, TableRow as baseRow } from "./Table";

const TableRow = styled(baseRow)`
  grid-template-columns: 1fr 1fr 1fr;
`;

function AlbumRow() {
  return (
    <TableRow>
      <Primary>Ethiopia</Primary>
      <Secondary>Teddyafro</Secondary>
      <Secondary>14</Secondary>
    </TableRow>
  );
}

export default AlbumRow;

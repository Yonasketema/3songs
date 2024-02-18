import styled from "styled-components";
import ArtistRow from "./ArtistRow";
import { Table as baseTable, TableHeader as baseHeader } from "./Table";

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

function ArtistTable() {
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Artist</div>
        <div>Total Songs</div>
        <div>Album</div>
      </TableHeader>
      <TableList>
        <ArtistRow />
      </TableList>
    </Table>
  );
}

export default ArtistTable;

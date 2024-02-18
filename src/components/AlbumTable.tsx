import styled from "styled-components";
import AlbumRow from "./AlbumRow";
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

function AlbumTable() {
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Album</div>
        <div>Artist</div>
        <div>Tracks</div>
      </TableHeader>
      <TableList>
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
        <AlbumRow />
      </TableList>
    </Table>
  );
}

export default AlbumTable;

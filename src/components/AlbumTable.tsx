import styled from "styled-components";
import AlbumRow from "./AlbumRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-100);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
`;

const TableList = styled.div`
  overflow-y: auto;
  height: 100%;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

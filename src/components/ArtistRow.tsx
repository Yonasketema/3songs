import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Album = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Artist = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const TotalSongs = styled.div`
  margin-left: 3rem;
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function ArtistRow() {
  return (
    <TableRow>
      <Artist>Teddyafro</Artist>
      <TotalSongs>14</TotalSongs>
      <Album>12</Album>
    </TableRow>
  );
}

export default ArtistRow;

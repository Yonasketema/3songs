import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr 0.8fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Artist = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Genre = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function SongRow() {
  return (
    <TableRow>
      <Title>Hello</Title>
      <Artist>Teddyafro</Artist>
      <Genre>Hip-pop</Genre>
      <Genre>Hip-pop</Genre>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </TableRow>
  );
}

export default SongRow;

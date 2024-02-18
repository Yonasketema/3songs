import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import CreateSongForm from "./CreateSongForm";
import { HiPencil, HiTrash } from "react-icons/hi";
import IconBox from "./IconBox";

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
const ButtonContainer = styled.div`
  margin-left: 41%;
  display: flex;
  gap: 1rem;
`;

function SongRow({ song }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <TableRow>
      <Title>{song.title}</Title>
      <Artist>{song.artist}</Artist>
      <Genre>{song.album}</Genre>
      <Genre>{song.genre}</Genre>
      <ButtonContainer>
        <IconBox onClick={() => setIsOpenModal(true)}>
          <HiPencil />
        </IconBox>
        <IconBox>
          <HiTrash color="var(--color-red-700)" />
        </IconBox>
      </ButtonContainer>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateSongForm
            onClose={() => setIsOpenModal(false)}
            songData={song}
          />
        </Modal>
      )}
    </TableRow>
  );
}

export default SongRow;

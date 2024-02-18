import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import CreateSongForm from "./CreateSongForm";
import { HiPencil, HiTrash } from "react-icons/hi";
import IconBox from "./IconBox";
import { Primary, Secondary, TableRow } from "./Table";

const ButtonContainer = styled.div`
  margin-left: 41%;
  display: flex;
  gap: 1rem;
`;

function SongRow({ song }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <TableRow>
      <Primary>{song.title}</Primary>
      <Secondary>{song.artist}</Secondary>
      <Secondary>{song.album}</Secondary>
      <Secondary>{song.genre}</Secondary>
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

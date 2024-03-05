import { useState } from "react";
import styled from "styled-components";

import { AppDispatch, RootState } from "../state/store";
import { HiPencil, HiTrash } from "react-icons/hi";
import { Song, deleteSong } from "../state/song/songSlice";
import { Primary, Secondary, TableRow } from "./Table";
import { useDispatch } from "react-redux";
import CreateSongForm from "./CreateSongForm";
import IconBox from "./IconBox";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { BiLoaderAlt } from "react-icons/bi";

const ButtonContainer = styled.div`
  margin-left: 41%;
  display: flex;
  gap: 1rem;
`;

type SongRowProps = {
  song: Song;
};

function SongRow({ song }: SongRowProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoadingDeleteSong = useSelector(
    (state: RootState) => state.song.isLoadingDeleteSong
  );

  const dispatch = useDispatch<AppDispatch>();

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
        <IconBox onClick={() => dispatch(deleteSong(song))}>
          {isLoadingDeleteSong ? (
            <BiLoaderAlt size={21} color="red" className="animate-spin" />
          ) : (
            <HiTrash color="var(--color-red-700)" />
          )}
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

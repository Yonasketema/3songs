import styled from "styled-components";
import Form from "./Form";
import Input from "./Input";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { createSong, updateSong } from "../state/song/songSlice";
import Button from "./Button";
import { useSelector } from "react-redux";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 10rem 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

type Song = {
  title: string;
  artist: string;
  album: string;
  genre: string;
};

type CreateSongFormProps = {
  onClose: () => void;
  songData?: Song;
};

const CreateSongForm = ({ onClose, songData }: CreateSongFormProps) => {
  const isEditForm = Boolean(songData);
  const state = useSelector((state: RootState) => state);

  const dispatch = useDispatch<AppDispatch>();

  const [song, setSong] = useState<Song>(() => {
    if (songData) {
      return songData;
    } else {
      return {
        title: "",
        artist: "",
        album: "",
        genre: "",
      };
    }
  });

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (isEditForm) {
      dispatch(updateSong(song));
    } else {
      dispatch(createSong(song));
    }
    if (!state.song.isLoadingCreateSong && !state.song.isLoadingUpdateSong) {
      onClose();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <Label htmlFor="title">Song title</Label>
        <Input
          type="text"
          value={song.title}
          id="title"
          required
          onChange={(e) =>
            setSong((state) => ({ ...state, title: e.target.value }))
          }
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="artist">Artist</Label>
        <Input
          type="text"
          id="artist"
          value={song.artist}
          required
          onChange={(e) =>
            setSong((state) => ({ ...state, artist: e.target.value }))
          }
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="album">Album</Label>
        <Input
          type="text"
          id="album"
          value={song.album}
          required
          onChange={(e) =>
            setSong((state) => ({ ...state, album: e.target.value }))
          }
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="genre">Genre</Label>
        <Input
          type="text"
          id="genre"
          value={song.genre}
          required
          onChange={(e) =>
            setSong((state) => ({ ...state, genre: e.target.value }))
          }
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          size="medium"
          type="reset"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variation="primary"
          type="submit"
          size="medium"
          disabled={
            !isEditForm
              ? state.song.isLoadingCreateSong
              : state.song.isLoadingUpdateSong
          }
        >
          {!isEditForm ? "Add Song" : "Edit Song"}
        </Button>
      </FormRow>
    </Form>
  );
};

export default CreateSongForm;

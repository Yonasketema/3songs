import { createSlice } from "@reduxjs/toolkit";

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface initialState {
  songs: Song[];
  isLoadingFetchSong: boolean;
  isLoadingDeleteSong: boolean;
  isLoadingCreateSong: boolean;
  isLoadingUpdateSong: boolean;
}

const initialState: initialState = {
  songs: [],
  isLoadingFetchSong: false,
  isLoadingDeleteSong: false,
  isLoadingCreateSong: false,
  isLoadingUpdateSong: false,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    fetchSongs: (state, action) => {
      action;
      state.isLoadingFetchSong = true;
    },
    fetchSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoadingFetchSong = false;
    },
    createSong: (state, action) => {
      action;
      state.isLoadingCreateSong = true;
    },
    createSongSuccess: (state, action) => {
      state.songs = [action.payload, ...state.songs];
      state.isLoadingCreateSong = false;
    },
    updateSong: (state, action) => {
      action;
      state.isLoadingUpdateSong = true;
    },
    updateSongSuccess: (state, action) => {
      state.songs = state.songs.map((song) => {
        if (song.id === action.payload.id) {
          return action.payload;
        }
        return song;
      });

      state.isLoadingUpdateSong = false;
    },
    deleteSong: (state, action) => {
      action;
      state.isLoadingDeleteSong = true;
    },
    deleteSongSuccess: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
      state.isLoadingDeleteSong = false;
    },
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  createSong,
  createSongSuccess,
  updateSong,
  updateSongSuccess,
  deleteSong,
  deleteSongSuccess,
} = songSlice.actions;

export default songSlice.reducer;

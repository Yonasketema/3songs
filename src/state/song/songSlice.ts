import { createSlice } from "@reduxjs/toolkit";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface initialState {
  songs: Song[];
  isLoading: boolean;
}

// const initialState: Song[] = [];
const initialState: initialState = {
  songs: [],
  isLoading: false,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    fetchSongs: (state) => {
      state.isLoading = true;
    },
    fetchSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    createSongs: (state) => {
      state.isLoading = true;
    },
    createSongsSuccess: (state, action) => {
      state.songs = [action.payload, ...state.songs];
      state.isLoading = false;
    },
    updateSongs: (state) => {
      state.isLoading = true;
    },
    updateSongsSuccess: (state, action) => {
      // state.songs = [action.payload, ...state.songs]; ????????????????????//////////??????????????????????????????
      state.isLoading = false;
    },
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  createSongs,
  createSongsSuccess,
  updateSongs,
  updateSongsSuccess,
} = songSlice.actions;

export default songSlice.reducer;

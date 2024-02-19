import { createSlice } from "@reduxjs/toolkit";

interface SongStat {
  stats: string;
  number: number;
}

interface GenreStat {
  genre: string;
  number: number;
}
interface allStat {
  songs: number;
  artist: string;
  album: string;
}

interface InitialState {
  songStats: SongStat[];
  genreStats: GenreStat[];
  albumStats: allStat[];
  artistStats: allStat[];
  isLoadingGenreStats: boolean;
  isLoadingSongStats: boolean;
  isLoadingAlbumStats: boolean;
  isLoadingArtistStats: boolean;
}

const initialState: InitialState = {
  songStats: [],
  genreStats: [],
  albumStats: [],
  artistStats: [],
  isLoadingGenreStats: false,
  isLoadingSongStats: false,
  isLoadingAlbumStats: false,
  isLoadingArtistStats: false,
};

const songStatsSlice = createSlice({
  name: "songStats",
  initialState,
  reducers: {
    fetchSongStats: (state) => {
      state.isLoadingSongStats = true;
    },
    fetchSongStatsSuccess: (state, action) => {
      state.songStats = action.payload;
      state.isLoadingSongStats = false;
    },
    fetchGenreStats: (state) => {
      state.isLoadingGenreStats = true;
    },
    fetchGenreStatsSuccess: (state, action) => {
      state.genreStats = action.payload;
      state.isLoadingGenreStats = false;
    },
    fetchAlbumStats: (state) => {
      state.isLoadingAlbumStats = true;
    },
    fetchAlbumStatsSuccess: (state, action) => {
      state.albumStats = action.payload;
      state.isLoadingAlbumStats = false;
    },
    fetchArtistStats: (state) => {
      state.isLoadingArtistStats = true;
    },
    fetchArtistStatsSuccess: (state, action) => {
      state.artistStats = action.payload;
      state.isLoadingArtistStats = false;
    },
  },
});

export const {
  fetchSongStats,
  fetchSongStatsSuccess,
  fetchAlbumStats,
  fetchAlbumStatsSuccess,
  fetchGenreStats,
  fetchGenreStatsSuccess,
  fetchArtistStats,
  fetchArtistStatsSuccess,
} = songStatsSlice.actions;

export default songStatsSlice.reducer;
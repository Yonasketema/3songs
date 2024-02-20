import { put, takeEvery, call } from "redux-saga/effects";
import {
  fetchSongsSuccess,
  createSongSuccess,
  updateSongSuccess,
  deleteSongSuccess,
  Song,
} from "./songSlice";
import {
  fetchSongsApi,
  createSongApi,
  deleteSongApi,
  updateSongApi,
  Query,
} from "../../apis/songApi";
import {
  fetchAlbumStatsApi,
  fetchArtistStatsApi,
  fetchGenreStatsApi,
  fetchSongStatsApi,
} from "../../apis/songStatsApi";

import {
  fetchAlbumStatsSuccess,
  fetchArtistStatsSuccess,
  fetchGenreStatsSuccess,
  fetchSongStatsSuccess,
  fetchSongStats,
  fetchGenreStats,
  songStats,
  GenreStat,
  allStat,
} from "./songStatsSlice";

import { PayloadAction } from "@reduxjs/toolkit";

function* fetchSongsHandler(action: PayloadAction<Query>) {
  try {
    const songsData: Song[] = yield call(() => fetchSongsApi(action.payload));

    yield put(fetchSongsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* createSongsHandler(action: PayloadAction<Song>) {
  try {
    const songsData: Song = yield call(() => createSongApi(action.payload));

    yield put(createSongSuccess(songsData));
    yield put(fetchSongStats());
    yield put(fetchGenreStats());
  } catch (e) {
    console.log(e);
  }
}

function* updateSongsHandler(action: PayloadAction<Song>) {
  try {
    const songsData: Song = yield call(() => updateSongApi(action.payload));

    yield put(updateSongSuccess(songsData));
    yield put(fetchSongStats());
    yield put(fetchGenreStats());
  } catch (e) {
    console.log(e);
  }
}

function* deleteSongsHandler(action: PayloadAction<Song>) {
  try {
    yield call(() => deleteSongApi(action.payload.id));

    yield put(deleteSongSuccess(action.payload.id));
    yield put(fetchSongStats());
    yield put(fetchGenreStats());
  } catch (e) {
    console.log(e);
  }
}

// -------

function* fetchSongStatsHandler() {
  try {
    const songsData: songStats[] = yield call(() => fetchSongStatsApi());

    yield put(fetchSongStatsSuccess(songsData[0]));
  } catch (e) {
    console.log(e);
  }
}
function* fetchGenreStatsHandler() {
  try {
    const songsData: GenreStat = yield call(() => fetchGenreStatsApi());

    yield put(fetchGenreStatsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* fetchAlbumStatsHandler() {
  try {
    const songsData: allStat = yield call(() => fetchAlbumStatsApi());

    yield put(fetchAlbumStatsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}
function* fetchArtistStatsHandler() {
  try {
    const songsData: allStat = yield call(() => fetchArtistStatsApi());

    yield put(fetchArtistStatsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}
function* songSaga() {
  yield takeEvery("song/fetchSongs", fetchSongsHandler);
  yield takeEvery("song/createSong", createSongsHandler);
  yield takeEvery("song/updateSong", updateSongsHandler);
  yield takeEvery("song/deleteSong", deleteSongsHandler);

  yield takeEvery("songStats/fetchSongStats", fetchSongStatsHandler);
  yield takeEvery("songStats/fetchGenreStats", fetchGenreStatsHandler);
  yield takeEvery("songStats/fetchAlbumStats", fetchAlbumStatsHandler);
  yield takeEvery("songStats/fetchArtistStats", fetchArtistStatsHandler);
}

export default songSaga;

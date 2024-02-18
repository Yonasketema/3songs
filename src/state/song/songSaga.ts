import { put, takeEvery, call } from "redux-saga/effects";
import { createSongsSuccess, fetchSongsSuccess, fetchSongs } from "./songSlice";
import {
  createSongsApi,
  deleteSongsApi,
  fetchSongsApi,
  updateSongsApi,
} from "../../apis/songApi";
import {
  fetchAlbumStatsApi,
  fetchArtistStatsApi,
  fetchGenreStatsApi,
} from "../../apis/songStatsApi";

import {
  fetchAlbumStatsSuccess,
  fetchArtistStatsSuccess,
  fetchGenreStatsSuccess,
} from "./songStatsSlice";

function* fetchSongsHandler() {
  try {
    const songsData = yield call(() => fetchSongsApi());

    yield put(fetchSongsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* fetchGenreStatsHandler() {
  try {
    const songsData = yield call(() => fetchGenreStatsApi());

    yield put(fetchGenreStatsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* fetchAlbumStatsHandler() {
  try {
    const songsData = yield call(() => fetchAlbumStatsApi());

    yield put(fetchAlbumStatsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}
function* fetchArtistStatsHandler() {
  try {
    const songsData = yield call(() => fetchArtistStatsApi());

    yield put(fetchArtistStatsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* createSongsHandler(action) {
  try {
    const songsData = yield call(() => createSongsApi(action.payload));

    yield put(createSongsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* updateSongsHandler(action) {
  try {
    const response = yield call(() => updateSongsApi(action.payload));

    yield put(fetchSongs());
  } catch (e) {
    console.log(e);
  }
}

function* deleteSongsHandler(action) {
  try {
    yield call(() => deleteSongsApi(action.payload));

    yield put(fetchSongs());
  } catch (e) {
    console.log(e);
  }
}

function* songSaga() {
  yield takeEvery("song/fetchSongs", fetchSongsHandler);
  yield takeEvery("song/createSongs", createSongsHandler);
  yield takeEvery("song/updateSongs", updateSongsHandler);
  yield takeEvery("song/deleteSong", deleteSongsHandler);

  yield takeEvery("songStats/fetchGenreStats", fetchGenreStatsHandler);
  yield takeEvery("songStats/fetchAlbumStats", fetchAlbumStatsHandler);
  yield takeEvery("songStats/fetchArtistStats", fetchArtistStatsHandler);
}

export default songSaga;

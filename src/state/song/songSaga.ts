import { put, takeEvery, call } from "redux-saga/effects";
import {
  fetchSongsSuccess,
  createSongSuccess,
  updateSongSuccess,
  deleteSongSuccess,
} from "./songSlice";
import {
  fetchSongsApi,
  createSongApi,
  deleteSongApi,
  updateSongApi,
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

function* fetchSongsHandler(action) {
  try {
    const songsData = yield call(() => fetchSongsApi(action.payload));

    yield put(fetchSongsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* createSongsHandler(action) {
  try {
    const songsData = yield call(() => createSongApi(action.payload));

    yield put(createSongSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* updateSongsHandler(action) {
  try {
    const songsData = yield call(() => updateSongApi(action.payload));

    yield put(updateSongSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* deleteSongsHandler(action) {
  try {
    yield call(() => deleteSongApi(action.payload));

    yield put(deleteSongSuccess(action.payload.id));
  } catch (e) {
    console.log(e);
  }
}

// -------

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
function* songSaga() {
  yield takeEvery("song/fetchSongs", fetchSongsHandler);
  yield takeEvery("song/createSong", createSongsHandler);
  yield takeEvery("song/updateSong", updateSongsHandler);
  yield takeEvery("song/deleteSong", deleteSongsHandler);

  yield takeEvery("songStats/fetchGenreStats", fetchGenreStatsHandler);
  yield takeEvery("songStats/fetchAlbumStats", fetchAlbumStatsHandler);
  yield takeEvery("songStats/fetchArtistStats", fetchArtistStatsHandler);
}

export default songSaga;

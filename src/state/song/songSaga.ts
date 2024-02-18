import { put, takeEvery, call } from "redux-saga/effects";
import {
  createSongsSuccess,
  fetchSongsSuccess,
  fetchSongs as fetchSongsAction,
} from "./songSlice";
import {
  createSongsApi,
  fetchSongsApi,
  updateSongsApi,
} from "../../apis/songApi";

function* fetchSongs() {
  try {
    const songsData = yield call(() => fetchSongsApi());

    yield put(fetchSongsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* createSongs(action) {
  try {
    const songsData = yield call(() => createSongsApi(action.payload));

    yield put(createSongsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}
function* updateSongs(action) {
  try {
    const response = yield call(() => updateSongsApi(action.payload));

    yield put(fetchSongsAction());
  } catch (e) {
    console.log(e);
  }
}

function* songSaga() {
  yield takeEvery("song/fetchSongs", fetchSongs);
  yield takeEvery("song/createSongs", createSongs);
  yield takeEvery("song/updateSongs", updateSongs);
}

export default songSaga;

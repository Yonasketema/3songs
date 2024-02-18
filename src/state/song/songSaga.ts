import { put, takeEvery, call } from "redux-saga/effects";
import {
  createSongsSuccess,
  fetchSongsSuccess,
  updateSongsSuccess,
  fetchSongs as fetchSongsAction,
} from "./songSlice";

function* fetchSongs() {
  try {
    const response = yield fetch("http://localhost:8000/api/v1/songs");

    const songsData = yield response.json();

    yield put(fetchSongsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}

function* createSongs(action) {
  try {
    const response = yield call(() =>
      fetch("http://localhost:8000/api/v1/songs", {
        body: JSON.stringify(action.payload),
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    );

    const songsData = yield response.json();

    yield put(createSongsSuccess(songsData));
  } catch (e) {
    console.log(e);
  }
}
function* updateSongs(action) {
  try {
    const response = yield call(() =>
      fetch(`http://localhost:8000/api/v1/songs/${action.payload.id}`, {
        body: JSON.stringify(action.payload),
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    );

    const songsData = yield response.json();

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

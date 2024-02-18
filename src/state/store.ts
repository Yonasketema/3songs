import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./song/songSlice";
import createSagaMiddleware from "redux-saga";
import songSaga from "./song/songSaga";
import themeSlice from "./themeSlice";
import SongStatsReducer from "./song/songStatsSlice";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    song: songReducer,
    SongStats: SongStatsReducer,
    themes: themeSlice,
  },
  middleware: () => [saga],
});

saga.run(songSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

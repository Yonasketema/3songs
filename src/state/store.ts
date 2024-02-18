import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./song/songSlice";
import createSagaMiddleware from "redux-saga";
import songSaga from "./song/songSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    song: songReducer,
  },
  middleware: () => [saga],
});

saga.run(songSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movieSagas";

export default function* rootSaga() {
  yield all([...moviesSaga]);
}

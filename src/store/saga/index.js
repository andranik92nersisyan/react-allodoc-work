import { all } from "redux-saga/effects";
import doctorsListSaga from "./doctorsListSaga";
import doctorsProfileSaga from "./doctorsProfileSaga";

function* rootSaga() {
  yield all([doctorsProfileSaga(),doctorsListSaga()])
}

export default rootSaga;

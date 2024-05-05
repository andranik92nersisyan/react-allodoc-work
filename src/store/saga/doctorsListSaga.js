import { call, put, takeLatest } from "redux-saga/effects";
import doctorsAPI from "../../service/api/DoctorsAPI";
import { DoctorsListActions } from "../actions";
import { DoctorsListType } from "../types";

function* getDoctorsList(action) {
  try {
    const response = yield call(
      doctorsAPI.get,
      `/?page=1&category=${action.payload}`
    );
    yield put(DoctorsListActions.success(response.data.results));
  } catch (err) {
    yield put(DoctorsListActions.error(err.message));
  }
}
function* doctorsListSaga(){
    yield takeLatest(DoctorsListType.REQUEST, getDoctorsList);
}

export default doctorsListSaga;

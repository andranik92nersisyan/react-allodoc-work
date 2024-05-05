import { call, put, takeLatest } from "redux-saga/effects";
import doctorsProfilAPI from "../../service/api/DoctorsProfilAPI";
import { DoctorProfileActions } from "../actions";
import { DoctorsListType } from "../types";

function* getDoctorsProfil(action) {
    try{
        const response = yield call(
            doctorsProfilAPI.get,
            `/${action.payload}/?role=doctor`
        );
        yield put(DoctorProfileActions.success(response.data));
    }   catch (err) {
        yield put(DoctorProfileActions.error(err.message));
    }
}
function* doctorProfileSaga(){
    yield takeLatest(DoctorsListType.REQUEST,getDoctorsProfil)
}
export default doctorProfileSaga;
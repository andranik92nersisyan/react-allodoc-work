import { combineReducers } from "redux";
import doctorListReducer from "./doctorListReducers";
import doctorProfailReducer from "./doctorProfailReducers";

const reducers = combineReducers({
  doctors: doctorListReducer,
  doctorsProfile: doctorProfailReducer,
});

export default reducers;

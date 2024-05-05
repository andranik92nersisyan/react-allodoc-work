import { DoctorsListType } from "../types";

function get(category) {
  return {
    type: DoctorsListType.REQUEST,
    payload:category ,
  };
}

function success(list) {
  return {
    type: DoctorsListType.SUCCESS,
    payload:list,
  };
}

function error(error) {
  return {
    type: DoctorsListType.REJECT,
    payload:error,
  };
}

export { get, success, error };

import { DoctorProfileType } from "../types";

const INITIAL_STATE = {
  data: null,
  errors: "",
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case DoctorProfileType.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DoctorProfileType.SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      };
    case DoctorProfileType.REJECT:
      return {
        ...state,
        data: null,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

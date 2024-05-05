import { DoctorsListType } from "../types";

const INITIAL_STATE = {
  list: [],
  errors: "",
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case DoctorsListType.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DoctorsListType.SUCCESS:
      return {
        ...state,
        list: payload,
        error: null,
        loading: false,
      };
    case DoctorsListType.REJECT:
      return {
        ...state,
        list: [],
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

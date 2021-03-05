import * as actionTypes from "../Constants/actionTypes";
import { updateObject } from "../Utility/Utility";

const initialState = {
  title: "",
  context: "",
  currentView: "",
  isLoading: false,
  entity: "",
  errors: {},
  success: {},
  visibility: true,
  isPending: false,
  userName: "",
  defaultInput: []
};
const reducer = (state = { ...initialState }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case actionTypes.ADD_MODEL:
      Object.keys(action.controls).map((key) => {
        newState.controls[key] = action.controls[key];
      });
      return updateObject(newState, { controls: newState.controls });
    case actionTypes.REMOVE_MODEL:
      Object.keys(action.controls).map((key) => {
        if (newState.controls[key]) {
          delete newState.controls[key];
        }
      });
      return updateObject(newState, { controls: newState.controls });
    case actionTypes.LOAD_MODEL:
      return updateObject(newState, { controls: action.controls });
    case actionTypes.LOADING:
      return updateObject(newState, { loading: action.loading });
    case actionTypes.ADD_FORM_ATTRIBUTE:
      return updateObject(newState, {
        [action.payload.name]: action.payload.value
      });
    case actionTypes.UPDATE_FORM_ATTRIBUTE:
      return updateObject(newState, {
        [action.payload.name]: action.payload.value
      });
    case actionTypes.DESTROY_FORM_STORE:
      return null;

    default:
      return newState;
  }
};

export default reducer;

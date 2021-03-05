import * as actionTypes from "../Constants/actionTypes";
import { updateObject } from "./Utility/Utility";

const initialState = {
  title: "",
  context: "",
  entity: "",
  errors: {},
  success: {},
  visibility: true,
  isPending: false,
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
    case actionTypes.SHOW_FORM:
      return updateObject(newState, action.payload);

    case actionTypes.VALIDATION_START:
      return updateObject(newState, {
        context: action.context,
        validating: true,
        isValid: true,
        validations: []
      });

    case actionTypes.VALIDATION_END:
      return updateObject(newState, { validating: false });

    case actionTypes.VALIDATION_SUCCESS:
      let validations = [...state.validations];
      validations.push(action.name);
      return updateObject(newState, { validations: validations });

    case actionTypes.VALIDATION_FAILED:
      return updateObject(newState, {
        isValid: false,
        errors: {
          msg: action.error,
          type: action.errType,
          data: action.errData
        }
      });
    case actionTypes.ADD_FORM_ATTRIBUTE:
      return updateObject(newState, {
        [action.payload.name]: action.payload.value
      });
    case actionTypes.UPDATE_FORM_ATTRIBUTE:
      return updateObject(newState, {
        [action.payload.name]: action.payload.value
      });
    case actionTypes.UPDATE_CONTROLS:
      let controlkey = action.delta.name;
      var oldControls = JSON.stringify({ ...state[action.delta.model] });
      var updatedControl = JSON.parse(oldControls);
      updatedControl[controlkey].valid = action.delta.valid;
      updatedControl[controlkey].value = action.delta.value;
      updatedControl[controlkey].validationMsg = action.delta.validationMsg;
      updatedControl[controlkey].hidden = action.delta.hidden;
      return updateObject(newState, { [action.delta.model]: updatedControl });
    case actionTypes.UPDATE_FORM_INPUT:
      let key = action.delta.name;
      var oldControls = JSON.stringify({ ...state.controls });
      var updatedControls = JSON.parse(oldControls);

      updatedControls[key].value = action.delta.value;

      if (action.delta["input-name"]) {
        updatedControls[key].value = action.delta["input-name"];
      }
      if (action.delta.valid) {
        updatedControls[key].valid = action.delta.valid;
      }
      if (action.delta.validationMsg) {
        updatedControls[key].validationMsg = action.delta.validationMsg;
      }
      if (action.delta.fieldValidation) {
        updatedControls[key].fieldValidation = action.delta.fieldValidation;
      }
      if (action.delta.hidden === true || action.delta.hidden === false) {
        updatedControls[key].hidden = action.delta.hidden;
      }
      if (action.delta.typeaheadResult) {
        updatedControls[key].typeaheadResult = action.delta.typeaheadResult;
      }
      if (action.delta.disabled) {
        updatedControls[key].disabled = action.delta.disabled;
      }
      if (action.delta.options) {
        updatedControls[key].options = action.delta.options;
      }
      if (action.delta.readOnly) {
        updatedControls[key].readOnly = action.delta.readOnly;
      }
      if (action.delta.displayValue) {
        updatedControls[key].displayValue = action.delta.displayValue;
      }
      if (action.delta.label) {
        updatedControls[key].label = action.delta.label;
      }
      return updateObject(newState, { controls: updatedControls });
    case actionTypes.UPDATE_DEFAULT_INPUT:
      let name = action.delta.name;
      var oldControls = JSON.stringify({ ...state.controls });
      var Controls = JSON.parse(oldControls);
      if (action.delta.defaultChecked) {
        Controls[name].defaultChecked = "defaultChecked";
      } else if (action.delta.value) {
        Controls[name].value = action.delta.value;
      }
      if (action.delta.valid) {
        Controls[name].valid = action.delta.valid;
      }
      if (action.delta.label) {
        Controls[name].label = action.delta.label;
      }

      if (action.delta.disabled) {
        Controls[name].disabled = action.delta.disabled;
      }
      if (action.delta.options) {
        Controls[name].options = action.delta.options;
      }
      if (action.delta.hidden === true || action.delta.hidden === false) {
        Controls[name].hidden = action.delta.hidden;
      }
      return updateObject(newState, { controls: Controls });

    case actionTypes.SUBMIT_FORM_INPUT:
      return updateObject(newState, { isPending: true });

    case actionTypes.CLEAR_FORM_INPUT:
      //return updateObject(newState, action.payload);
      return action.payload;
    case actionTypes.TOGGLE_POPUP:
      return updateObject(newState, action.payload);
    //return action.payload;
    case actionTypes.FORM_SUCCESS:
      let data = {
        isPending: false,
        success: { msg: action.message, data: action.data }
      };
      return updateObject(newState, data);

    case actionTypes.FORM_ERROR:
      let datas = {
        isPending: false,
        errors: {
          msg: action.error,
          type: action.errType,
          data: action.errData
        }
      };
      return updateObject(newState, datas);

    case actionTypes.FORM_CTRL_INVALID:
      return updateObject(newState, { isValid: false });

    case actionTypes.FORM_CTRLS_VALID:
      return updateObject(newState, { isValid: true });

    case actionTypes.SET_START_TIME:
      return updateObject(newState, { startTime: action.time });

    case actionTypes.DESTROY_FORM_STORE:
      return null;

    default:
      return newState;
  }
};

export default reducer;

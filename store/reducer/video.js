import * as actionTypes from "../action/actionTypes";

const initialState = {
  video: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_VIDEO:
      return {
        ...state,
      };
    case actionTypes.VIDEO_CHANGER:
      return {
        ...state,
        video: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
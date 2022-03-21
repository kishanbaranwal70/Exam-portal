import * as actionTypes from '../action/actionTypes';

const initialState = {
    // c: null,
    python: null
    // java: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTION:
            return {
                ...state,
                // c: action.c,
                // java: action.java,
                python: action.python
            };
        case actionTypes.RES_CHANGER:
            let pythn = state.python;
            pythn[action.index].response = action.op;
            return {
                ...state,
                python: pythn,
            };
        default:
            return state;
    }
};
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case actionTypes.FETCH_QUESTION:
//         return {
//           ...state,
//           python: action.python,
//           coRes: action.coRes,
//         };
//   case actionTypes.RES_CHANGER:
//     let pythn = state.python;
//     pythn[action.index].response = action.op;
//     return {
//       ...state,
//       python: pythn,
//     };
//       default:
//         return state;
//     }
//   };
export default reducer;
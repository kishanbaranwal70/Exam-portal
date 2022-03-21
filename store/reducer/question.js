import * as actionTypes from '../action/actionTypes';

const initialState = {
    currentQuestionDes: null,
    currentQuestionOption1: null,
    currentQuestionOption2: null,
    currentQuestionOption3: null,
    currentQuestionOption4: null,
    currentQuestionType: null,
    currentQuestionNo: null,
    currentQuestionCode: null,
    // correctOption: null,
    correctOp: null,
    co: null,
    msg: null,
    index: null,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_QUESTION:
            return {
                ...state,
            };


        case actionTypes.QUES_CHANGER:
            return {
                ...state,
                currentQuestionDes: action.payload.Description,
                currentQuestionOption1: action.payload.Option1,
                currentQuestionOption2: action.payload.Option2,
                currentQuestionOption3: action.payload.Option3,
                currentQuestionOption4: action.payload.Option4,
                currentQuestionNo: action.payload.QuestionNo.toString(),
                currentQuestionType: action.payload.QuestionType,
                currentQuestionCode: action.payload.QuestionCode,
                correctOp: action.payload.correctOp,
                msg: null,
                index: action.payload.currentIndex
            };
        case actionTypes.RES_FINAL:
            return {
                ...state,
                msg: action.msg,
                correctOp: action.correctOp,
            }
            case actionTypes.CORRECT_OPTION:
                return {
                    ...state,
                    co: action.target,

                }
            
        default:
            return state;
    }
};


export default reducer;
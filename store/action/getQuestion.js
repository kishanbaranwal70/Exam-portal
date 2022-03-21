import * as actionTypes from './actionTypes';
import axios from 'axios';
let config = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("tokenStudent")}`,
    }
}
export const correctOptionHandler = (target) => {
    return {
        type: actionTypes.CORRECT_OPTION,
        target: target,
    };

}
export const videoHandler = (target)=>{
    return {
        type: actionTypes.VIDEO_CHANGER,
        value: target,
    };
}
const video = () => {
    return {
      type: actionTypes.INIT_VIDEO,
    };
  };
  export const initTest = () => {

    return async dispatch => {

        let configg = {

            headers: {
                'Authorization': `Bearer ${localStorage.getItem("tokenStudent")}`,
            }
        }
        axios.get('https://bdcoe-api.herokuapp.com/questions/', configg).then(res => {
            let responsedata = res.data;
            dispatch(video());
            dispatch(getQuestion(responsedata.data));
            dispatch(baseQuestion());
        }).catch(err => {
            console.log(err);
        })
    }
}
export const baseQuestion = () => {
    return {
        type: actionTypes.INIT_QUESTION,
    };
}


export const getQuestion = (response) => {
    return dispatch => {
        // let c = [];
        // let java = [];
        let python = [];
        for (var i = 0; i < response.length; i++) {
            let details = response[i];
            let btn = {
                key: details.questionType + ":" + details.questionNo,
                name: details.questionNo,
                response: details.response,
                funcInput: details,
            };
            if (response[i].questionType === '1') {
                // c.push(btn);

            }
            else if (response[i].questionType === '2') {
                // java.push(btn);
            }
            else if (response[i].questionType === '3') {
                python.push(btn);
            }
        }// end of for loop
        dispatch(getQuest(python));
        // console.log(c)
    }
}

export const getQuest = (python) => {
    return {
        type: actionTypes.FETCH_QUESTION,
        // c: c,
        // java: java,
        python: python
    };
};

export const quesChanger = (payload) => {
    return {
        type: actionTypes.QUES_CHANGER,
        payload: payload
    }
}



// export const final = (msg) => {
//     return {
//         type: actionTypes.RES_FINAL,
//         msg: msg
//     }
// }
export const final = (msg, correctOp) => {
    return {
        type: actionTypes.RES_FINAL,
        msg: msg,
        correctOp: correctOp,
    };
};

export const helper = (op, i) => {
    return {
        type: actionTypes.RES_CHANGER,
        op: op,
        index: i,
    };
};
export const ansClearer = (op, i) => {
    return (dispatch) => {
        dispatch(final("", "NULL"));
        dispatch(helper(op, i));
    };
};
export const ansSubmiter = (response, i) => {
    return dispatch => {
        dispatch(final('Submitting ...'));
        let data = {
            "questionNo": response.questionNo,
            "questionType": response.questionType,
            "correctOption": response.correctOption
        }
        let configg = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("tokenStudent")}`,
            }
        }
        axios.post('https://bdcoe-api.herokuapp.com/response/', data, configg)
            .then(res => {
                if (res.data.response === "successfully saved ") {
                    dispatch(helper(response.correctOption, i));
                    dispatch(final("Response is Saved", response.correctOption));
                } else {
                    dispatch(final('Try Again'));
                }
            })
            .catch(err => {
                dispatch(final('Try Again'));
            })
    }
}

// export const ansSubmiter = (response, i) => {
//     return (dispatch) => {
//       dispatch(final("Wait summit ans"));
//       let data = {
//         questionNo: response.questionNo,
//         questionType: response.questionType,
//         correctOption: response.correctOption,
//       };
//       axios
//         .post("https://bdcoe-api.herokuapp.com/response/", data, config)
//         .then((res) => {
//           if (res.data.response === "successfully saved ") {
//             dispatch(helper(response.correctOption, i));
//             dispatch(final("Response is Saved", response.correctOption));
//           } else {
//             dispatch(final("Try Again"));
//           }
//         })
//         .catch((err) => {
//           dispatch(final("Try Again"));
//         });
//     };
//   };

// export const getQuestion = (response) => {
//     return (dispatch) => {
//       let python = [];
//       let coRes = [];
//       for (var i = 0; i < response.length; i++) {
//         let details = response[i];
        // let btn = {
        //   key: details.questionType + ":" + details.questionNo,
        //   name: details.questionNo,
        //   response: details.response,
        //   funcInput: details,
        // };
//         if (response[i].questionType === "1") {
//         } else if (response[i].questionType === "2") {
//         } else if (response[i].questionType === "3") {
//           python.push(btn);
//           coRes.push(null);
//         }
//       } // end of for loop
//       dispatch(getQuest(python, coRes));
//       // console.log(c)
//     };
//   };
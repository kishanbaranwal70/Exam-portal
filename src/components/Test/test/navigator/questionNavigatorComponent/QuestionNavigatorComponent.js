import React, { Component } from 'react';
import classes from './questionNavigator.module.css';
// import QuestionNumberContainer from '../questionNumberContainerComponent/questionNumberContainerComponent';
import Button from '../../../../ui/Button/ButtonTestui'
// import Button from '../../../../ui/Button/BottonTestui';
import { connect } from 'react-redux';
// import * as actionTypes from '../../../../../store/action/actionTypes';
import * as getActions from '../../../../../store/action/getQuestion'
import Video from '../../video/Video';

class QuestionNavigator extends Component {
    idRetender = (value) => {
        switch (value) {
            case '1': {
                return "option1";
            }
            case '2': {
                return "option2";
            }
            case '3': {
                return "option3";
            }
            case '4': {
                return "option4";
            }
            default: {
                return "option1";
            }
        }
    }
    questionChanger = (quesDetail, index) => {


        let payload = {
            'Description': quesDetail.questionDesc,
            'Option1': quesDetail.questionOptions[0],
            'Option2': quesDetail.questionOptions[1],
            'Option3': quesDetail.questionOptions[2],
            'Option4': quesDetail.questionOptions[3],
            'correctOp': quesDetail.response,
            'QuestionType': quesDetail.questionType,
            'QuestionNo': quesDetail.questionNo,
            'QuestionCode': quesDetail.questionCode,
            'currentIndex': index
        }
        // let payload = {
        //     Description: quesDetail.questionDesc,
        //     Option1: quesDetail.questionOptions[0],
        //     Option2: quesDetail.questionOptions[1],
        //     Option3: quesDetail.questionOptions[2],
        //     Option4: quesDetail.questionOptions[3],
        //     QuestionType: quesDetail.questionType,
        //     QuestionNo: quesDetail.questionNo,
        //     QuestionCode: quesDetail.questionCode,
        //     currentIndex: index,
        //   };
        this.props.onButton(payload);
        if(this.props.co != null)
        document.getElementById(this.idRetender(this.props.co)).checked = false;
    }
    render() {
        // let c = null;
        // let java = null;
        let python = null;
        if (this.props.c !== null) {
            // c = this.props.c.map((ques, index) => {
            //     return <Button key={ques.key} name={ques.name} clicked={() => this.questionChanger(ques.funcInput, index)} />
            // })
        }
        if (this.props.java) {
            // java = this.props.java.map((ques, index) => {
            //     return <Button key={ques.key} name={ques.name} clicked={() => this.questionChanger(ques.funcInput, index)} />
            // })
        }
        if (this.props.python) {
            python = this.props.python.map((ques, index) => {
                return <Button key={ques.key} name={index + 1} clicked={() => this.questionChanger(ques.funcInput, index)} />

            })
        }
        let content
        if (python === null) {
            content = 'Loading your navigator'
        } else {
            content = (<React.Fragment>
                {/* <p>C</p>
                <p>{c}</p>
                <p> java</p>
                {java} */}
                <p>Aptitude</p>
                {python}
                {/* <Video/> */}
            </React.Fragment>)
        }
        return (
            <div className={classes.QuestionNavigator} >
                {/* <p>Apti</p>
                <QuestionNumberContainer /> */}
                {/* <p>Navigator</p> */}


                <div className={classes.Vid}>
                    <Video />
                </div>
                {content}

            </div >
        )
    }

}
const mapStateToProps = state => {
    return {
        // se herw
        // c: state.questBase.c,
        // java: state.questBase.java,
        python: state.questBase.python,
        co :  state.quesNo.co

    };
}
const mapDispatchToProps = dispatch => {
    return {
        onButton: (payload) => dispatch(getActions.quesChanger(payload)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionNavigator);

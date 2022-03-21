import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './questionComponent.module.css';
import * as getActions from '../../../../../store/action/getQuestion';
import Button from '../../../../ui/Button/BottonUI';
import parse from 'html-react-parser'
import Blocker from '../../../../ui/blocked/blocked';
class QuestionComponent extends Component {
    state = {
        questionNo: null,
        questionType: null,
        correctOption: null

    }
    componentDidMount = () => {
        this.props.onInnit();

    }
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
    optionHandler = (event) => {
        this.props.correctOptionHandler(event.target.value)
        this.setState({

            correctOption: event.target.value,
            questionNo: this.props.questionNo,
            questionType: this.props.questionType
        })
    }
    ansHandler = () => {
        this.props.ansSubmitter(this.state, this.props.index);
        // this.props.ansSubmitter(this.state)

        // ansHandler = () => {
        //     console.log(this.props.index);
        //   };
    }
    clearans = () => {
        document.getElementById(this.idRetender(this.state.correctOption)).checked = false;

        this.props.clearAnswer("NULL", this.props.index);
    };
    nextHandler = async () => {
        let index = this.props.index + 1;
        let questionType = this.props.questionType;
        // await this.props.clearAnswer("NULL", index);rr
                this.setState({
                    correctOption: null
                }
                )
        document.getElementById(this.idRetender(this.state.correctOption)).checked = false;
        console.log(this.props.index + 1);
        // console.log('next handler clicked', questionType);
        // this.setState({
        //     correctOption: null
        // })
        if (questionType === '1') {
            let data = this.props.c;
            let len = data.length;
            // console.log(index)
            if (index >= len) {
                console.log('already last')
            } else {
                let d = data[index].funcInput;
                let payload = {
                    'Description': d.questionDesc,
                    'Option1': d.questionOptions[0],
                    'Option2': d.questionOptions[1],
                    'Option3': d.questionOptions[2],
                    'Option4': d.questionOptions[3],
                    'QuestionType': d.questionType,
                    'QuestionNo': d.questionNo,
                    'QuestionCode': d.questionCode,
                    'currentIndex': index
                }
                this.props.onButton(payload);
            }
        }
        if (questionType === '2') {
            let data = this.props.java;
            let len = data.length;
            // console.log(index)
            if (index >= len) {
                // alert("This is teh last ")
                console.log('already last')
            } else {
                let d = data[index].funcInput;
                let payload = {
                    'Description': d.questionDesc,
                    'Option1': d.questionOptions[0],
                    'Option2': d.questionOptions[1],
                    'Option3': d.questionOptions[2],
                    'Option4': d.questionOptions[3],
                    'QuestionType': d.questionType,
                    'QuestionNo': d.questionNo,
                    'QuestionCode': d.questionCode,
                    'currentIndex': index
                }
                this.props.onButton(payload);
            }
        }
        if (questionType === '3') {
            let data = this.props.python;
            let len = data.length;
            // console.log(index)
            if (index >= len) {
                console.log('already last')
            } else {
                let d = data[index].funcInput;
                let payload = {
                    'Description': d.questionDesc,
                    'Option1': d.questionOptions[0],
                    'Option2': d.questionOptions[1],
                    'Option3': d.questionOptions[2],
                    'Option4': d.questionOptions[3],
                    'QuestionType': d.questionType,
                    'QuestionNo': d.questionNo,
                    'QuestionCode': d.questionCode,
                    'currentIndex': index
                }
                this.props.onButton(payload);
            }
        }
    }

    render() {
        let content
        if (this.props.o1 === null) {
            content = <p>Select Questions to display the Questions.</p>
        } else {
            content = (<div className={classes.Ques}>
                <p>{this.props.index + 1}.) {this.props.des}</p>
                {parse(this.props.code)}
                <input type="radio" id="option1" name="option" value="1" checked={
                    this.props.python[this.props.index].response === "1" ? 1 : null
                } onClick={this.optionHandler} />

                <label htmlFor="option1">{this.props.o1}</label><br />
                <input type="radio" id="option2" name="option" value="2" checked={
                    this.props.python[this.props.index].response === "2" ? 1 : null
                } onClick={this.optionHandler} />
                <label htmlFor="option2">{this.props.o2}</label><br />
                <input type="radio" id="option3" name="option" value="3" checked={
                    this.props.python[this.props.index].response === "3" ? 1 : null
                } onClick={this.optionHandler} />
                <label htmlFor="option3">{this.props.o3}</label><br />
                <input type="radio" id="option4" name="option" value="4" checked={
                    this.props.python[this.props.index].response === "4" ? 1 : null
                } onClick={this.optionHandler} />
                <label htmlFor="option4">{this.props.o4}</label>
                <br />

                {this.props.msg}
                <br />
                <button  onClick={this.ansHandler} className={classes.Submit} >Save Response</button>
                {/* <button>Save For Later</button> */}
                <button onClick={this.clearans} className={classes.Clear}>Clear Answer</button>

                <button onClick={this.nextHandler} className={classes.Next}>Next</button>
            </div>
            )
        }
        let content2;
        if (this.props.v === null) {
            content2 = <Blocker> true</Blocker>;
        } else {
            content2 = null;
        }
        
        
        return (
            <div>
                <div className={classes.Question}>
                    { content2 }
                    <p>Question </p>
                    <hr />
                    {content}
                    <div className={classes.Contact}>
                    <p>In case of any problem. Call us</p>
                    <p>7355670415</p>
                    <p>9716247916</p>
                    </div>
                </div>
            </div >
        )
    }


}

const mapStateToProps = state => {
    return {
        des: state.quesNo.currentQuestionDes,
        o1: state.quesNo.currentQuestionOption1,
        o2: state.quesNo.currentQuestionOption2,
        // correctOption: state.quesNo.c,
        correctOp: state.quesNo.correctOp,
        o3: state.quesNo.currentQuestionOption3,
        o4: state.quesNo.currentQuestionOption4,
        questionType: state.quesNo.currentQuestionType,
        questionNo: state.quesNo.currentQuestionNo,
        msg: state.quesNo.msg,
        code: state.quesNo.currentQuestionCode,
        index: state.quesNo.index,
        c: state.questBase.c,
        java: state.questBase.java,
        python: state.questBase.python,
        des: state.quesNo.currentQuestionDes,
        v: state.video.video,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInnit: () => dispatch(getActions.initTest()),
        // ansSubmitter: (response) => dispatch(getActions.ansSubmiter(response)),

        ansSubmitter: (response, i) =>
            dispatch(getActions.ansSubmiter(response, i)),
        onButton: (payload) => dispatch(getActions.quesChanger(payload)),
        clearAnswer: (c, i) => dispatch(getActions.ansClearer(c, i)),
        correctOptionHandler: (target) => dispatch(getActions.correctOptionHandler(target))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);
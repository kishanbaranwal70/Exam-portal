import React from 'react';
import classes from './questionNoContainer.module.css';
import QuestionNumber from '../questionNumberComponent/QuestionNumberComponent';

const QuestionNumberContainer = () => {
    return (
        <div className={classes.QuestionNoContainer}>
            <QuestionNumber no='1'/>
            <QuestionNumber no='2'/>
            <QuestionNumber no='3'/>
            <QuestionNumber no='4'/>
        </div>
    )
}

export default QuestionNumberContainer;




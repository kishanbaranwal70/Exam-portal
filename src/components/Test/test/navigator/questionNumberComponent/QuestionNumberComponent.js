import PropTypes from "prop-types";
import React from 'react';
import classes from './questionNumber.module.css';

const QuestionNumber = (props) => {
    return (
        <div className={classes.QuestionNo}>
            {props.no}
        </div>
    )
}

QuestionNumber.propTypes = {
    no: PropTypes.any
}

export default QuestionNumber;


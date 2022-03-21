import PropTypes from "prop-types";
import React from 'react'
import classes from './backdropui.module.css';

const BackdropUI = (props) => {
    return (
        <div className={classes.Backdrop} onClick={props.clicked}>
        </div>
    )
}

BackdropUI.propTypes = {
    clicked: PropTypes.func
}

export default BackdropUI;
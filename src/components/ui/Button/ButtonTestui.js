// import PropTypes from "prop-types";
import React from 'react'
import classes from './buttonTest.module.css';

const ButtonTestUI = (props) => {
    return (
  

         <button onClick={props.clicked} className={classes.Test}>{props.name}</button>

    )
}

// ButtonUi.propTypes = {
//     clicked: PropTypes.func,
//     name: PropTypes.string
// }
export default ButtonTestUI;
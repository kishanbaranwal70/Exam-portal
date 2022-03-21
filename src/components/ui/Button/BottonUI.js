// import PropTypes from "prop-types";
import React from 'react'
import classes from './Button.module.css';
const ButtonUi = (props) => {
    return (
        <button onClick={props.clicked}>{props.name}</button>
    )
}

// ButtonUi.propTypes = {
//     clicked: PropTypes.func,
//     name: PropTypes.string
// }
export default ButtonUi;
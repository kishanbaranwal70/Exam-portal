import React from 'react'
import classes from './modelUI.module.css';
import BackdropUI from '../Backdrop/BackdropUI';

const ModelUI = (props) => {
    return (
        <React.Fragment>
            <BackdropUI clicked={props.closeBackdrop} />
            <div className={classes.Model}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default ModelUI;
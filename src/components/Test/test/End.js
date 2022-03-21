import React, { Component } from 'react';
// import { connect } from 'react-redux';
import classes from './end.module.css'
import back from './back.jpg'
class End extends Component {
    Coding=()=>{
        window.location="https://www.hackerrank.com/bdcoe-recruitment-2k20";
    }
    clr=()=>{
        window.localStorage.clear();
        
    }
    render() {
        this.clr()
        return(
            <div className={classes.Container}>
                <h1>Your Responses are succesfully recorded.</h1>
                <p>Click on the link below to go to your coding test.</p>
                <button  className={classes.Btn}
             onClick={this.Coding}>Start Your Coding exam.</button>
            </div>
        )
    }
};
export default End;

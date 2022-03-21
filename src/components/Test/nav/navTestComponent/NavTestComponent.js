import React, { Component } from 'react';
import classes from './navTestComponent.module.css';
import { Redirect } from 'react-router-dom';

class NavTestComponent extends Component {

    state = {
        timer: '',
        redirect: null
    }
    componentDidMount() {
        var hours = 0;
        var minutes = 15;
        var seconds = 0;

        if (localStorage.getItem("flag")) {
            minutes = localStorage.getItem("min");
            seconds = localStorage.getItem("sec");
            hours = localStorage.getItem("hour");
        }
        else {

            localStorage.setItem("flag", 1);
        }
        if (hours < 0) {
            
            this.setState({
                redirect: <Redirect to="/End" />
            })
        } else {
            this.t = setInterval(() => {
                if (hours < 0) {
                    clearInterval(this.t);
                }
                if (seconds > 0) {
                    seconds = seconds - 1;
                }
                else {
                    seconds = 59;
                    if (minutes - 1 === -1) {
                        hours = hours - 1;
                        if (hours < 0) {
                            
                            clearInterval(this.t);
                            this.setState({

                                redirect: <Redirect to="/End" />
                            })
                        }
                        minutes = 59;
                    } else {
                        minutes = minutes - 1;
                    }
                }
                if (minutes > 9 && seconds > 9) {
                    this.setState({
                        timer: "0" + hours + " : " + minutes + " : " + seconds
                    })
                }
                else if (minutes < 10 && seconds < 10) {

                    this.setState({
                        timer: "0" + hours + " : 0" + minutes + " : 0" + seconds
                    })
                }
                else if (minutes < 10) {

                    this.setState({
                        timer:
                            "0" + hours + " : 0" + minutes + " : " + seconds
                    })
                }
                else if (seconds < 10) {

                    this.setState({
                        timer:
                            "0" + hours + " : " + minutes + " : 0" + seconds
                    })
                }
                localStorage.setItem("min", minutes);
                localStorage.setItem("sec", seconds);
                localStorage.setItem("hour", hours);
            }, 1000);
        }
    }

    fuck = () => {
      localStorage.setItem("f",0)       
        if (window.confirm("Do you really want to submit.")) {
            this.setState({
                
                redirect: <Redirect to="/End"></Redirect>
            })
        }

    }

    render() {
        let redirect = null;
        if (localStorage.getItem('tokenStudent')) {
            redirect = null;
        } else {
            clearInterval(this.t);
            redirect = (<Redirect to="/Dashboard" />)
        }
        return (
            <div className={classes.Nav}>
                {redirect}
                {this.state.redirect}
                <div className={classes.Logo}>
                    <div className={classes.Item}>
                        <p>BigDataCOE</p>
                    </div>
                </div>
                <div className={classes.LeftContent}>
                    <div className={classes.Item}>
                        <button onClick={this.fuck}>Submit Test</button>
                    </div>
                    <div className={classes.Item}>
                        <p className='timer'>{this.state.timer}</p>
                    </div>
                </div>
            </div>
        )


        // function  myfuncton(event) {
        //     <Redirect to="/End" />

        //   }

    }

}

export default NavTestComponent;
import React from 'react'
import classes from './navhomecomponent.module.css';
import logo from './logo.png';
// import IconButton from '@material-ui/core/IconButton';


const NavHomeComponent = () => {
    return (
        <div className={classes.Nav}>
            <div className="logo">
                <div className={classes.Item}>
                {/* <IconButton> */}
                    <img src= {logo} alt="BDCOE" height="90" width="90" />
                    {/* </IconButton>   */}
                </div>
            </div>
            <div className={classes.LeftContent}>
                <div className={classes.Item}>
                <a href="https://www.instagram.com/bdcoe/?hl=en" target="_blank"> <p>Contact US</p></a>
                </div>
                { /* <div className={classes.Item}>
                    <p>Login</p>
                </div> */ }
                <div className={classes.Item}>
                <a href="http://www.bdcoe.co.in/" target="_blank"> <p>About</p></a>
                </div>
                {/* <div className={classes.Item}>
                <a href="https://devanshsa5a.github.io/examportall/#/" >   <p>Home</p></a>
                </div> */}
            </div>
        </div>
    )
}

export default NavHomeComponent;
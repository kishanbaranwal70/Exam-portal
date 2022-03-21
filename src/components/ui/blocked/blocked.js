import React from "react";
import classes from "./blocker.module.css";

const blocker = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Model}>
        {/* {props.children} */}
        <p>Allow Your browser to acess your camera.</p>
        <p>If you have already denied the permission allow again and refresh your page.</p>
        {/* <p></p> */}
        </div>
    </React.Fragment>
  );
};

export default blocker;
import PropTypes from "prop-types";
import React from 'react'
import classes from './cartItemComponent.module.css';
// import logo1 from './download.png';

const CartItemComponent = (props) => {
    return (
        <div className={classes.Cart}>
             {/* <p>{props.img}</p>    */}
            {/* <p>{props.heading}</p> */}

            <p>{props.children}</p>
        </div>
    )
}

CartItemComponent.propTypes = {
    children: PropTypes.any,
    heading: PropTypes.string
}
 
export default CartItemComponent;
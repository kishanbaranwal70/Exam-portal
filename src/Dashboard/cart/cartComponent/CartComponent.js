import React from 'react'
import classes from './cartComponent.module.css'
import CartItemComponent from '../cartItemComponent/CartItemComponent';
import classes2 from '../cartItemComponent/cartItemComponent.module.css';
import logo1 from './logo1.png';
import logo2 from './pencil.png';
import logo3 from './alert.png';


const CartComponent = () => {
    return (
        <div className={classes.CartSection}>

            <CartItemComponent heading='heading1'>
            <h1> Test Duration </h1>
                < p className={classes.Text}>
             <p  > < img src={logo1} alt="img" >
                 </img>
                 </p>
                180 minutes
                </p> 
                           </CartItemComponent>
            <CartItemComponent heading='heading2' > 
            <h1> Questions </h1>
                < p className={classes.Text}>
             <p  > < img src={logo2} alt="img" >
                 </img>
                 </p>
                30 questions
                </p> </CartItemComponent>
            <CartItemComponent heading='heading3' >
                <h1 className={classes.Text2} > Be Alert </h1>
                < p className={classes.Text2} >
             <p  > < img src={logo3} alt="img" >
                 </img>
                 </p >
               Any type of cheating or plagarism will be subjected to disqualification.
                </p> </CartItemComponent>
              
           

        </div>

    )
}

export default CartComponent;
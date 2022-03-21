import React from 'react'
import classes from './footerComponent.module.css';
import insta from './insta.png'
import medium from './mdium.png'

// import IconButton from '@material-ui/core/IconButton';
// import youtube from './download.png';

const FooterComponent = () => {
    return (
        <div className={classes.FooterSection}>
            <div className={classes.FooterTop}>
                <p className={classes.Item}>
                {/* <IconButton> */}
                     <a  href="https://www.instagram.com/bdcoe/?hl=en" target="_blank">

             <img src={insta}></img>
                    </a>
                    {/* </IconButton> */}
            </p>
                <p className={classes.Item}>
                {/* <IconButton> */}

                    <a  href="https://medium.com/@bdcoe" target="_blank">

             <img src={medium}/>
                    </a>
                {/* </IconButton> */}
                    
            </p>
                {/* <p className={classes.Item}>
                {/* <IconButton> */}

                    {/* <a  href="https://www.youtube.com/channel/UCE-dW0xxvpZq_UWZ9B5jKUA/featured" target="_blank">
                    <img src={youtube}/>
                    </a> */}
                {/* </IconButton> */}
                    
            {/* </p> */} 
                {/* <p className={classes.Item}>
            <a href="gmailto: mail2devansha@gmail.com" target="_blank">
                <img src={mail}></img>
                </a> 
                   </p> */}
            </div>

            <hr width="70%" />
            <h2 className={classes.Text}>BDCoE &copy; Copyright 2020</h2>
           < br></br>
        </div>
    )

}
export default FooterComponent;
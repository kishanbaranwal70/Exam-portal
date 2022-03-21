import React from 'react'
import classes from './PrecautionComponent.module.css';
import Button from '../ui/Button/BottonUI';
//import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';

class PrecautionComponent extends React.Component {   
    state =
    {
        redirect: null
    }
   Testhandle=()=>{
//     document.addEventListener("focusin", ()=>{

        
//     })
    document.documentElement.requestFullscreen().catch(console.log);
   
       
            this.setState({
                redirect: (<Redirect to="/Test" />)
            })
          
    }
    render() {
        return (
            <div className={classes.Container}>
                {this.state.redirect}
                   <div className={classes.Instruction}>

                    <p>1. This test will contain 25 questions of 4 marks each.</p>
                    <p>2. Wrong answers will be calucated as -1 marks.</p>
                    <p>3. Unattempted question will marked as 0 marks.</p>
                    <p>4. You will given 15 minutes to complete this test.</p>
                    <p>5. To be able to give this, allow your browser to give your camera access to the portal</p>
                    <p>6. You will redirected into full-screen, do not try to get out from full screen or switch tabs otherwise you could be blacklisted and can be disqualified.</p>
                    <p>7. Before starting this test,make sure you have a working webcam and desktop system .</p>
                    <p><strong>8. Do not refresh your page otherwise your submmitted responses on frontend will be lost.(Although they are save in our database. Hence not recommended)</strong></p>
                    <p><strong>9. After the test u will redirected to coding round.(It is compulsary).</strong></p>
                    <p><strong>10. No Response will be saved nor Question will be displayed after 1:30 hence you should start your test before 1:15 for sure.</strong></p>
                    {/* <p></p> */}
           
                <button onClick={this.Testhandle}>
        Start my test
      </button>
      
        </div>
            </div>
    
        )
    } 
}

export default PrecautionComponent;
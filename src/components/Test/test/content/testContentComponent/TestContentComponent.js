import React from 'react';
import classes from './testContentComponent.module.css';
import QuestionComponent from '../quesComponent/QuestionComponent';
import QuestionNavigator from '../../navigator/questionNavigatorComponent/QuestionNavigatorComponent';
import Video from '../../video/Video';

const TestContentComponent = (props) => {

        document.addEventListener("focusin", ()=>{

            document.documentElement.requestFullscreen().catch(console.log);

        })
        
       
        // document.addEventListener('blur', () => {
        //    if(flag ==2 ){

        //        alert("fuck")   
        //        flag+=1;
        //    }
        //   }, true);

        let flag=0;

        document.addEventListener("fullscreenchange", function(event) {
            event.preventDefault(true);
            console.log(event)
        //     flag+=1;
        //     if(flag%4){
        //         alert("Dont change the full screen mode.");
                // document.documentElement.requestFullscreen().catch(console.log);
        //         // flag=flag+1;
        //     }  
        //     else document.documentElement.requestFullscreen().catch(console.log);
          });
     
    return (
        <div  >
                 
        <  div className={classes.Content}>
            <QuestionComponent />
            <QuestionNavigator />
        </div>        

            {/* <Video /> */}
         
        </div>
       
    )
}


export default TestContentComponent;
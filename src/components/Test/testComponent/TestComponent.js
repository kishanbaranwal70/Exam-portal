import React from 'react';
import TestNavComponent from '../nav/navTestComponent/NavTestComponent';
import TestContentComponent from '../test/content/testContentComponent/TestContentComponent';



const TestComponent = () => {
 let flag=0;
  localStorage.setItem("f",flag)
      window.onblur = () => {
     flag = localStorage.getItem("f")
     if(flag>=2) alert("This is Reported to Team BDCoE. Dont Do this again.");
     flag+=1;
     localStorage.setItem("f",flag)
      };
    
    return(

        <React.Fragment>
            <TestNavComponent />
            <TestContentComponent />
        </React.Fragment >
    )

}

export default TestComponent;

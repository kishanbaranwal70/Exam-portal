import React, { Component } from 'react';

import PrecautionComponent from './PrecautionComponent';
import NavComponent from './PreNav';
import { Redirect } from 'react-router-dom';

class DashBoardComponent extends Component {
      
    
    render() {
        
        return (
            
            <React.Fragment>
                {/* {redirect} */}
                <NavComponent />
                <PrecautionComponent/>
            </React.Fragment>
        )
    }
}
export default DashBoardComponent;
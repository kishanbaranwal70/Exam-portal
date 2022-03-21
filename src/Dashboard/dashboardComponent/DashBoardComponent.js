import React, { Component } from 'react';
import NavHomeComponent from '../navHomeComponent/NavHomeComponent';
import HomeBannerComponent from '../homeBannerComponent/HomeBannerComponent';
import CartComponent from '../cart/cartComponent/CartComponent';
import FooterComponent from '../footer/footerComponent/FooterComponent';

import { Redirect } from 'react-router-dom';

class DashBoardComponent extends Component {
      
    
    render() {
        
        return (
            
            <React.Fragment>
                {/* {redirect} */}
               


               
                <NavHomeComponent />
                <HomeBannerComponent />
                <CartComponent />
                <FooterComponent />
            </React.Fragment>
        )
    }
}
export default DashBoardComponent;
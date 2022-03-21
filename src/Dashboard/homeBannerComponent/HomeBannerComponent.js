import React from 'react'
import classes from './homeBannerComponent.module.css';
// import classes from '../../ui/Button/Botton.module.css';
import ButtonUi from '../../ui/Button/BottonUI';


import ModelUI from '../../ui/Model/ModelUI';
import LoginComponent from '../loginComponent/LoginComponent';
import RegisterComponent from '../registerComponent/RegisterComponent';
import ReactTypingEffect from 'react-typing-effect';
// import Appp from './Appp';



class HomeBannerComponent extends React.Component {

    // get the state in more effective way
    state = {
        showModel: 0,
        isLoginModel: 0
    }

    loginHandler = () => {
        this.setState((prevState, props) => {
            return {
                showModel: prevState.showModel === 0 ? 1 : 0,
                isLoginModel: 1,
            }
        });
    }
    registerHandler = () => {
        this.setState((prevState, props) => {
            return {
                showModel: prevState.showModel === 0 ? 1 : 0,
                isLoginModel: 0,
            }
        });
    }
    closeBackdrop = () => {
        this.setState((prevState, props) => {
            return {
                showModel: prevState.showModel === 0 ? 1 : 0
            }
        });
    }


    render() {
        const LoginModel = <LoginComponent closeBackdrop={this.closeBackdrop} />;
        const RegisterModel = <RegisterComponent closeBackdrop={this.closeBackdrop} />;
        const ModelContent = this.state.isLoginModel ? LoginModel : RegisterModel;

        return (
            <div className={classes.Banner} >

                {this.state.showModel === 1 ? <ModelUI closeBackdrop={this.closeBackdrop} > {ModelContent}
                </ModelUI>
                    : null}

                <div className={classes.BannerContent} >
                    <h1  > <ReactTypingEffect 
                    text=" Welcome to the Bigdata CoE Recuirtment"
                    speed="50"
                    />
                       </h1>
                    <p>Recruitment Drive 2k20</p>
                          
                    <p>Login to Start Your Test.</p>
                {/* <p> If you are new, click on Register to register yourselves.</p> */}
                    {/* <ButtonUi name='Register' clicked={this.registerHandler} /> */}
                    <br/>
                    <span>

                   <ButtonUi name='Login' clicked={this.loginHandler} />
                    </span>

                    
                </div>

            </div>
        )
    }
}

export default HomeBannerComponent;
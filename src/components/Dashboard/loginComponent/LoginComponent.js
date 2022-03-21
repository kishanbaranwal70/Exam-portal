import PropTypes from "prop-types";
import React from 'react';
import classes from "./login.module.css"
import Button from '../../ui/Button/BottonUI';
import Input from '../../ui/Input/Input';
import { Redirect } from 'react-router-dom';
// import {Browser} from ''


/*

  my credentila for testing
  1910070 or 1910071
  ripudaman

 */

import axios from 'axios';

class LoginComponent extends React.Component {
    state = 
    {   
        Login: {
            rollNo: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Enter the Student Number'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 17,
                    minLength: 7
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false,
        redirect: null,
        msg: null,
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLogInForm = {
            ...this.state.Login
        };
        const updatedFormElement = {
            ...updatedLogInForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedLogInForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedLogInForm) {
            formIsValid = updatedLogInForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ Login: updatedLogInForm, formIsValid: formIsValid });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    LogInHandler = (event) => {
        this.setState({
            loading: true
        })
        event.preventDefault();
        // console.log(this.state.signIn.username.value);
        // let config = {
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem("tokenAdmin")}`,
        //     }
        // }

        let data = {
            "rollNo": this.state.Login.rollNo.value,
            "password": this.state.Login.password.value
        }
        axios.post('https://bdcoe-api.herokuapp.com/login/', data).then(res => {
            this.setState({
                loading: false
            })
            if (res.data.token) {
                let token = res.data.token
                localStorage.setItem("tokenStudent", token);
                this.setState({
                    
                    redirect: (<Redirect to="/Precaution" />)
                })

            }
        }).catch(errr => {
            this.setState({
                loading: false,
                msg: 'login failed'
            })
            console.log('some error');
        })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.Login) {
            formElementsArray.push({
                id: key,
                config: this.state.Login[key]
            });
        }

        let form = (
            <form onSubmit={this.LogInHandler}>
                {this.state.msg}
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button name='Start Test' className={classes.Btn}>Start Test </button>
                {/* <Link to='/Test'>
                </Link> */}
            </form>
        );
        if (this.state.loading) {
            form = (<p>Loading... </p>)
        }

        return (
            <div className={classes.Container}>
                {this.state.redirect}
                <h1 style={{ 'textAlign': 'center' }}> Login Student</h1>
                < hr style={{ 'width': '70%' }} />
                {form}
            </div>

        )
    }
}

LoginComponent.propTypes = {
    closeBackdrop: PropTypes.func
}

export default LoginComponent;  
// password123
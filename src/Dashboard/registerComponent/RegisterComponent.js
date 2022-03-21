import PropTypes from "prop-types";
import React from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/BottonUI';

class RegisterComponent extends React.Component {
    state = {
        Register: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Enter the Fisrt Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Enter the Last Name'
                },
                value: '',
                validation: {
                },
                valid: false,
                touched: false
            }
            ,
            studentNumber: {
                elementType: 'dropdown',
                elementConfig: {
                    type: 'name',
                    placeholder: "Enter the Student Number"
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Enter the Email'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            }
            ,
            branch: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Enter the Branch 1 or 2'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Enter the password'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Comfirm the passwordd'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },

        },
        formIsValid: false,
        loading: false,
        redirect: null,
        msg: null,
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedRegisterForm = {
            ...this.state.Register
        };
        const updatedFormElement = {
            ...updatedRegisterForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedRegisterForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedRegisterForm) {
            formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ Register: updatedRegisterForm, formIsValid: formIsValid });
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }


    registerHandler = (event) => {
        this.setState({
            loading: true
        })
        event.preventDefault();
        let config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("tokenAdmin")}`,
            }
        }
        let data = {
            "first_name": this.state.Register.firstName.value,
            "last_name": this.state.Register.lastName.value,
            "student_number": this.state.Register.studentNumber.value,
            "email": this.state.Register.email.value,
            "branch": this.state.Register.branch.value,
            "password": this.state.Register.password.value,
            "password2": this.state.Register.confirmPassword.value
        }
        axios.post('https://bdcoe-api.herokuapp.com/register/', data, config).then(res => {
            this.setState({
                loading: false
            })
            console.log(res.data);
            if (res.data.response === 'successfully registered new user') {
                console.log('done register');
                this.setState({
                    msg: 'Register done'
                })

            } else
            {
                console.log(`${res.data}`);
                this.setState({
                    msg: 'Registered Failed'
                })
            }
        }).catch(err => {
            this.setState({
                loading: false
            })
            console.log('submit again error');
        })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.Register) {
            formElementsArray.push({
                id: key,
                config: this.state.Register[key]
            });
        }

        let form = (
            <form onSubmit={this.registerHandler}>
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
                <Button name='Register'></Button>
                {/* <Link to='/Test'>
                </Link> */}
            </form>
        );
        if (this.state.loading) {
            form = (<p>Loading... </p>)
        }

        return (
            <div>
                <h1>This is Register Form</h1>
                {this.state.redirect}
                {form}
                {/* <Link to="/"><ButtonUi name='go to Home' clicked={this.props.closeBackdrop} /></Link> */}
            </div>
        )
    }
}

RegisterComponent.propTypes = {
    closeBackdrop: PropTypes.func
}

export default RegisterComponent;  
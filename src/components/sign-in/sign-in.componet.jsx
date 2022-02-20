import React from "react";
import FormInput from "../form-input/form-input.componet";
import CustomButton from "../custom-button/custom-button.component";

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} action='#'>
                    <FormInput type="email" value={this.state.email}
                        name='email'
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput type="password" value={this.state.password}
                        name='password'
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <CustomButton type='submit'>SIGN IN</CustomButton>

                </form>
            </div>
        )
    }
};
export default SignIn;
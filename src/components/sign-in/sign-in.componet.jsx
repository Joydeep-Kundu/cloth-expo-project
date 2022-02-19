import React from "react";

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
                    <input type="email" value={this.state.email}
                        name='email'
                        onChange={this.handleChange}
                        required />
                    <input type="password" value={this.state.password}
                        name='password'
                        onChange={this.handleChange}
                        required
                    />
                    <input type="submit" onClick={this.onSubmit} />

                </form>
            </div>
        )
    }
};
export default SignIn;
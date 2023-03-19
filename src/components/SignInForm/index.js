import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SignInForm.module.css';

const initialValue = {
    email:'',
    pwd:'',
    emailValid: true,
    pwdValid: true
};

class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state = {...initialValue}
    }
    // handleEmail = ({target:{value}}) => this.setState({email:value})
    // handlePwd = ({target:{value}}) => this.setState({pwd:value})

    handleInput = ({target:{name, value}}) => this.setState({[name]:value, [`${name}Valid`]: !value.includes(' ')})

    handleForm = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({...initialValue})
    }
    render() {
        const {email, pwd, emailValid, pwdValid} = this.state;
        const emailCX = cx(styles.input, {
            [styles.invalid]:!emailValid
        })
        const pwdCX = cx(styles.input, {
            [styles.invalid]:!pwdValid
        })
        // const emailClassName = `${styles.input} ${emailValid ? styles.valid : styles.invalid}`;
        // const pwdClassName = `${styles.input} ${pwdValid ? styles.valid : styles.invalid}`;
        return (
            <form className={styles.container} onSubmit={this.handleForm}>
                <input type='text' name='email' value={email} placeholder='email' onChange={this.handleInput} className={emailCX}  />
                <input type='password' name='pwd' value={pwd} placeholder='password' onChange={this.handleInput} className={pwdCX}  />
                <input type='submit' value='Sign In' className={styles.btn} />
            </form>
        );
    }
}

export default SignInForm;

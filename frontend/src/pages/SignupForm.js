import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

// function SignupForm() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//     event.preventDefault();
//     event.stopPropogation();
//     }

//     setValidated(true);
//   };

const SignupForm = () => {
  // return (
  //   <Form>
  //     <Form.Group className="mb-3" controlId="formFirstName">
  //       <Form.Label>First Name</Form.Label>
  //       <Form.Control required type="text" placeholder="Enter First Name" />
  //     </Form.Group>
  //     <Form.Group className="mb-3" controlId="formLastName">
  //       <Form.Label>Last Name</Form.Label>
  //       <Form.Control required type="text" placeholder="Enter Last Name" />
  //     </Form.Group>
  //     <Form.Group className="mb-3" controlId="formUsername">
  //       <Form.Label>Username</Form.Label>
  //       <Form.Control required type="text" placeholder="Enter Username" />
  //     </Form.Group>
  //     <Form.Group className="mb-3" controlId="formEmail">
  //       <Form.Label>Email address</Form.Label>
  //       <Form.Control required type="email" placeholder="Enter email" />
  //       <Form.Control.Feedback type="invalid">
  //         Please provid a valid email
  //       </Form.Control.Feedback>
  //     </Form.Group>
  //     <Form.Group className="mb-3" controlId="formPassword">
  //       <Form.Label>Password</Form.Label>
  //       <Form.Control required type="password" placeholder="Password" />
  //       <Form.Control.Feedback type="invalid">
  //         Password must be at least 8 characters and contain at least one number and symbol
  //       </Form.Control.Feedback>
  //     </Form.Group>
  //     <Form.Group className="mb-3" controlId="formConfirmPassword">
  //       <Form.Label>Password</Form.Label>
  //       <Form.Control required type="password" placeholder="Confirm Pasword" />
  //       <Form.Control.Feedback type="invalid">
  //         Passwords must match
  //       </Form.Control.Feedback>
  //     </Form.Group>
  //     <Button variant="primary" type="submit">
  //       Sign up
  //     </Button>
  //   </Form>
  // )
  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })

    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const findFormErrors = () => {
    const {firstName, lastName, username, email, password, confirmPassword} = form
    const newErrors = {}

    if ( !firstName || firstName === "" ) newErrors.firstName = 'cannot be blank'

    if ( !lastName || lastName === "" ) newErrors.lastName = 'cannot be blank'

    if ( !username || username === "" ) newErrors.username = 'cannot be blank'

    if ( !email || email === "" ) newErrors.email = 'cannot be blank'
    else if ( /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(email) ) newErrors.email = 'must be a valid email'

    if ( !password || password === "" ) newErrors.password = 'please enter a password'
    else if ( password.length < 8) newErrors.password = 'password must be at least 8 characters long'
    else if ( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[\W]).{8,}$/.test(password) ) newErrors.password = ' password must contain at least 1 uppcase letter, lowercase letter, number, and special character'

    if ( !password || password === "" ) newErrors.confirmPassword = 'please confirm your password'
    else if ( password !== confirmPassword ) newErrors.confirmPassword = 'passwords must match'

    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newErrors = findFormErrors()
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors)
    } else {
      alert('you did it')
    }

  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter First Name" onChange={ e => setField('firstName', e.target.value) } isInvalid={ !!errors.firstName }/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter Last Name" onChange={ e => setField('lastName', e.target.value) } isInvalid={ !!errors.lastName }/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control required type="text" placeholder="Enter Username" onChange={ e => setField('username', e.target.value) } isInvalid={ !!errors.username }/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" onChange={ e => setField('email', e.target.value) } isInvalid={ !!errors.email }/>
        <Form.Control.Feedback type="invalid">
          Please provid a valid email
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" onChange={ e => setField('password', e.target.value) } isInvalid={ !!errors.password }/>
        <Form.Control.Feedback type="invalid">
          Password must be at least 8 characters and contain at least one number and symbol
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Confirm Password" onChange={ e => setField('confirmPassword', e.target.value) } isInvalid={ !!errors.confirmPassword }/>
        <Form.Control.Feedback type="invalid">
          Passwords must match
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign up
      </Button>{' '}
    </Form>
  );
}

export default SignupForm;


/*import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 16;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}

export default Form;*/
import React, { Form } from 'react';
import { FormGroup } from 'react-bootstrap';
import { render } from 'react-dom';
import { Button } from 'bootstrap';
import { useState } from 'react';

function SignupForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropogation();
    }

    setValidated(true);
  };
  
  render()
  {
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group classname="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group classname="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group classname="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control required type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group classname="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
          <Form.Control.Feedback type="invalid">
            Please provid a valid email
          </Form.Control.Feedback>
        </Form.Group>

        <FormGroup className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Pasword" />
          <Form.Control.Feedback type="invalid">
            Password must be at least 8 characters and contain at least one number and symbol
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Confirm Pasword" />
          <Form.Control.Feedback type="invalid">
            Passwords must match
          </Form.Control.Feedback>
        </FormGroup>

        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    );
  }
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
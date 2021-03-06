import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
 /* const [ form, setForm ] = useState({})
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

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ( !email || email === "" ) newErrors.email = 'cannot be blank'
    else if ( !emailRegex.test(String(email)) ) newErrors.email = 'must be a valid email'

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if ( !password || password === "" ) newErrors.password = 'please enter a password'
    else if ( password.length < 8) newErrors.password = 'password must be at least 8 characters long'
    else if ( !passwordRegex.test(String(password)) ) newErrors.password = ' password must contain at least 1 lowercase letter, capital letter, number and special character'

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
*/
  return (
    <Form noValidate>
      <Form.Group className="mb-3" controlId="loginUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control required type="text" placeholder="Username"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>{' '}
    </Form>
  );
}

export default Login;

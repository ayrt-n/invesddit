import React from 'react';
import { Formik } from 'formik';
import LoginInput from './forms/LoginInput';
import { login } from '../services/authService';

function Login() {
  // Validate email and password, return errors if present
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  // On submit send API request to login
  // If success, redirect user to app
  // Otherwise, display error messages
  const handleLogin = (values, { setSubmitting }) => {
    login(values.email, values.password)
    .then((data) => {
      console.log(data);
      setSubmitting(false);
    })
  };

  return (
    <div className="Form-container">
      <h1 className="Form-header">Log in</h1>
      <Formik
        initialValues={{email: '', password: ''}}
        validate={validate}
        onSubmit={handleLogin}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <LoginInput label="Email" name="email" id="email" type="text" />
            <LoginInput label="Password" name="password" id="password" type="password" />
            <button type="submit">Sign in</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;

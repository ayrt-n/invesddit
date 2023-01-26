import React from 'react';
import { Formik } from 'formik';
import LoginInput from './forms/LoginInput';
import { createAccount } from '../services/authService';

// User registration form component, used to register users for an account
function SignUp() {
  // Validate email, password, and password confirmation
  // Return errors if present
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.username) {
      errors.username = 'Required';
    } else if (/\W/i.test(values.username)) {
      errors.username = 'Username must only contain letters, numbers, or underscores';
    } else if (values.username.length < 3 || values.username.length > 20) {
      errors.username = 'Username must be between 3 and 20 characters';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be 6 characters or greater';
    }

    if (!values.passwordConfirmation) {
      errors.passwordConfirmation = 'Required';
    } else if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation = 'Password confirmation does not match password';
    }

    return errors;
  };

  // On submit send API request to register user
  // If success, redirect to login with success message
  // Otherwise, display error message
  const handleRegister = (values, { setSubmitting }) => {
    createAccount(values.email, values.username, values.password, values.passwordConfirmation)
    .then((data) => {
      console.log(data);
      setSubmitting(false);
    })
  }

  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{email: '', username: '', password: '', passwordConfirmation: ''}}
        validate={validate}
        onSubmit={handleRegister}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <LoginInput label="Email" name="email" id="email" type="text" />
            <LoginInput label="Username" name="username" id="username" type="text" />
            <LoginInput label="Password" name="password" id="password" type="password" />
            <LoginInput label="Confirm Password" name="passwordConfirmation" id="passwordConfirmation" type="password" />
            <button type="submit">
              Sign up
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;

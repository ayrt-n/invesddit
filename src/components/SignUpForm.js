import React, { useState } from 'react';
import { Formik } from 'formik';
import LoginInput from './forms/LoginInput';
import { createAccount } from '../services/authService';
import LoginButton from './forms/LoginButton';
import ErrorMessage from './forms/ErrorMessage';
import SuccessMessage from './SuccessMessage';

function SignUpForm({ callToAction }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [submit, setSubmit] = useState(false);

  // Validate email, password, and password confirmation
  // Return errors if present
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Please enter an email address to continue';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Not a valid email address';
    }

    if (!values.username) {
      errors.username = 'Please enter a username to continue';
    } else if (/\W/i.test(values.username)) {
      errors.username = 'Username may only contain letters, numbers, or underscores';
    } else if (values.username.length < 3 || values.username.length > 20) {
      errors.username = 'Username must be between 3 and 20 characters';
    }

    if (!values.password) {
      errors.password = 'Please enter a password to continue';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (!values.passwordConfirmation) {
      errors.passwordConfirmation = 'Please re-enter password to continue';
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
      if (data.success) {
        setSubmit('success');
      } else {
        setErrorMessage(() => {
          // Return error message with first letter capitalized
          if (data['field-error']) {
            return data['field-error'][1].charAt(0).toUpperCase() + data['field-error'][1].slice(1);
          }
          
          return data['error'];
        })

        setSubmitting(false);
      }
    })
  }

  return (
    <div className="max-w-[280px] mx-auto">
      {submit ?
        <div className="my-[24px]">
          <SuccessMessage header="Thanks for signing up!" message="Check your email for a link to verify your account." />
        </div> :
        <>
          <div className="my-[24px]">
            <h1 className="font-medium text-[20px] leading-[24px]">{callToAction || "Sign up"}</h1>
          </div>
          <Formik
            initialValues={{email: '', username: '', password: '', passwordConfirmation: ''}}
            validate={validate}
            onSubmit={handleRegister}
          >
            {({ isValid, dirty, isSubmitting, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <LoginInput label="Email" name="email" id="email" type="text" />
                <LoginInput label="Username" name="username" id="username" type="text" />
                <LoginInput label="Password" name="password" id="password" type="password" />
                <LoginInput label="Confirm Password" name="passwordConfirmation" id="passwordConfirmation" type="password" />
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <LoginButton disabled={!isValid || !dirty || isSubmitting}>
                  Sign up
                </LoginButton>
              </form>
            )}
          </Formik>
        </>
      }
    </div>
  );
}

export default SignUpForm;
import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import LoginInput from './forms/LoginInput';
import { submitLogin } from '../services/authService';
import LoginButton from './forms/LoginButton';
import ErrorMessage from './forms/ErrorMessage';
import AuthContext from '../contexts/authentication/AuthContext';

function LoginForm({ links }) {
  const auth = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

  // Validate email and password, return errors if present
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Please enter an email address to continue';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Not a valid email address';
    }

    if (!values.password) {
      errors.password = 'Please enter a password to continue';
    }

    return errors;
  };

  // On submit send API request to login
  // If success, redirect user to app
  // Otherwise, display error messages
  const handleLogin = (values, { setSubmitting }) => {
    setErrorMessage('');

    submitLogin(values.email, values.password)
    .then((response) => {
      if (response.ok && response.headers.get('authorization')) {
        auth.login({ authorization: response.headers.get('authorization') });
        window.location.reload();
      } else {
        return response.json().then(err => setErrorMessage(() => {
          if (err['field-error']) {
            return err['field-error'][1].charAt(0).toUpperCase() + err['field-error'][1].slice(1);
          }
          
          return err['error'];
        }));
      }
    })
    .catch(err => {
      console.error(err);
    });
  };

  return (
    <div className="max-w-[280px] mx-auto">
      <div className="my-[24px]">
        <h1 className="font-medium text-[20px] leading-[24px]">Log in</h1>
        <p className="mt-[8px] text-[12px] leading-[16px]">
          By continuing, you agree to setting up an Invesddit account and agree to our <a href="/user-agreement" target="_blank" className="underline text-primary-500">User Agreement</a> and <a href="/user-agreement" target="_blank" className="underline text-primary-500">Privacy Policy.</a>
        </p>
      </div>
      <Formik
        initialValues={{email: '', password: ''}}
        validate={validate}
        onSubmit={handleLogin}
      >
        {({ isValid, dirty, isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <LoginInput label="Email" name="email" id="email" type="text" />
            <LoginInput label="Password" name="password" id="password" type="password" />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <LoginButton disabled={!isValid || !dirty || isSubmitting}>
              Log in
            </LoginButton>
          </form>
        )}
      </Formik>
      {links}
    </div>
  );
}

export default LoginForm;

// setErrorMessage(() => {
//           // Return error message with first letter capitalized
//           if (data['field-error']) {
//             return data['field-error'][1].charAt(0).toUpperCase() + data['field-error'][1].slice(1);
//           }
          
//           return data['error'];
//         })
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { resetPassword } from '../services/authService';
import { Link } from 'react-router-dom';
import { ErrorMessage, Formik } from 'formik';
import LoginButton from './forms/LoginButton';
import LoginInput from './forms/LoginInput';
import SuccessMessage from './SuccessMessage';

function ResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const [submit, setSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};

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

  const handleSubmit = (values, { setSubmitting }) => {
    let key = searchParams.get('key');
    resetPassword(key, values.password, values.passwordConfirmation)
    .then(response => {
      if (response.ok) {
        setSubmit('success');
      } else {
        setErrorMessage('Something went wrong! Try logging in or resend the password reset request.')
        setSubmitting(false);
      }
    })
  }

  return (
    <div className="max-w-[280px] mx-auto">
      {submit ?
        <div className="my-[24px]">
          <SuccessMessage header="Password Reset" />
        </div> :
        <>
          <div className="my-[24px]">
            <h1 className="font-medium text-[20px] leading-[24px]">Reset Password</h1>
          </div>
          <Formik
            initialValues={{password: '', passwordConfirmation: ''}}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty, isSubmitting, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <LoginInput label="Password" name="password" id="password" type="password" />
                <LoginInput label="Password Confirmation" name="passwordConfirmation" id="passwordConfirmation" type="password" />
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <LoginButton disabled={!isValid || !dirty || isSubmitting}>
                  Reset Password
                </LoginButton>
              </form>
            )}
          </Formik>
        </>
      }
    </div>
  )
}

export default ResetPasswordForm;
import React, { useState } from 'react';
import { Formik } from 'formik';
import LoginInput from './forms/LoginInput';
import LoginButton from './forms/LoginButton';
import ErrorMessage from './forms/ErrorMessage';
import { resetPasswordRequest } from '../services/authService';
import SuccessMessage from './SuccessMessage';

function RecoverPasswordForm({ links }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [submit, setSubmit] = useState(false);

  const validate = (values) => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Please enter an email address to continue';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Not a valid email address';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    resetPasswordRequest(values.email, values.username, values.password, values.passwordConfirmation)
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
  };

  return (
    <div className="max-w-[280px] mx-auto">
      {submit ?
        <div className="my-[24px]">
          <SuccessMessage header="Password Reset Sent" message="Check your email for a link to reset your password." />
        </div> :
        <>
          <div className="my-[24px]">
            <h1 className="font-medium text-[20px] leading-[24px]">Reset your password</h1>
            <p className="mt-[8px] text-[12px] leading-[16px]">
              Tell us the email address associated with your Invesddit account, and we'll send you an email with a link to reset your password.
            </p>
          </div>
          <Formik
            initialValues={{email: ''}}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty, isSubmitting, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <LoginInput label="Email" name="email" id="email" type="text" />
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <LoginButton disabled={!isValid || !dirty || isSubmitting}>
                  Reset password
                </LoginButton>
              </form>
            )}
          </Formik>
          {links}
        </>
      }
    </div>
  );
}

export default RecoverPasswordForm;

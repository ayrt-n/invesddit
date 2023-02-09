import React from 'react';
import { Formik } from 'formik';
import LoginInput from './forms/LoginInput';
import { login } from '../services/authService';
import PillButton from './PillButton';

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
    <div className="max-w-[350px] bg-canvas-light mx-auto overflow-auto mt-4 rounded-[20px]">
      <div className="max-w-[280px] mx-auto">
        <h1 className="mt-[24px] font-medium text-[20px] leading-[24px]">Log in</h1>
        <Formik
          initialValues={{email: '', password: ''}}
          validate={validate}
          onSubmit={handleLogin}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              <LoginInput label="Email" name="email" id="email" type="text" />
              <LoginInput label="Password" name="password" id="password" type="password" />
              <div className="mt-[16px]">
                <PillButton type="submit" additionalClasses="h-[40px] leading-[18px] mt-[8px]">Log in</PillButton>
              </div>
            </form>
          )}
        </Formik>
        <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
          <div>
            New to Invesddit?
            <a href="#" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Sign up</a>
          </div>
          <div>
            Forgot your
            <a href="#" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">password</a>
            ?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import { useField } from 'formik';
import ErrorMessage from './ErrorMessage';

function LoginInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mt-[16px] relative w-full">
      <input className="rounded-[100px] text-[14px] font-semibold leading-[18px] h-[46px] pl-[16px] pr-[36px] pt-[22px] pb-[10px] outline-0 bg-gray-100 focus:border-primary-400 border-[1px] w-full peer"
        {...field}
        {...props}
        placeholder=" "
      />
      <label className="text-neutral-600 text-[12px] font-normal leading-[18px] left-[16px] top-[2px] h-full w-[280px] absolute align-middle pointer-events-none transition-all peer-placeholder-shown:font-medium peer-placeholder-shown:text-[14px] peer-placeholder-shown:top-[14px] peer-focus:font-normal peer-focus:top-[2px] peer-focus:text-[12px] peer-hover:top-[2px] peer-hover:text-[12px] peer-hover:font-normal"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  );
}

export default LoginInput;
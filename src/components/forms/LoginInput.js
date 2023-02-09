import React from 'react';
import { useField } from 'formik';

function LoginInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mt-[16px] relative w-full">
      <input className="rounded-[100px] text-[14px] font-semibold leading-[18px] h-[46px] pl-[16px] pr-[36px] pt-[22px] pb-[10px] outline-0 bg-gray-100 focus:border-primary-400 border-[1px] w-full" {...field} {...props} />
      <label className="text-neutral-600 font-medium h-full w-[280px] absolute left-[16px] align-middle transition-all top-[2px] text-[12px] pointer-events-none" htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-[12px] leading-[14px] pl-[16px] mt-[4px]" data-testid="form-error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default LoginInput;
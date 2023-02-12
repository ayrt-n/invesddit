import React from 'react';
import { useField } from 'formik';

function TextareaInput({ maxLength, ...props }) {
  const [field] = useField(props);

  return (
    <>
      <textarea {...field} {...props} className="outline-0 break-words rounded-[4px] border-[1px] border-nav-border w-full min-h-[122px] overflow-hidden py-[8px] px-[16px] resize-vertical text-[14px] leading-[21px] active:border-input-focused focus:border-input-focused" />
    </>
  )
}

export default TextareaInput;

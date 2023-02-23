import React, { useState, useEffect } from 'react';

function TextareaInput({ showLength, ...props }) {
  // State to track the length of the text input
  // Will be displayed with the input if showLength prop true
  const [length, setLength] = useState(props.value.length);
  useEffect(() => { setLength(props.value.length) }, [props.value]);


  return (
    <>
      <textarea {...props} className="outline-0 break-words rounded-[4px] border-[1px] border-nav-border w-full min-h-[122px] overflow-hidden py-[8px] px-[16px] resize-vertical text-[14px] leading-[21px] active:border-input-focused focus:border-input-focused align-top" />
      {showLength ?
        <div className="text-feed-text pt-[5px] text-[12px] leading-[16px]">
          {props.maxLength - length} characters remaining
        </div> :
        null
      }
    </>
  )
}

export default TextareaInput;

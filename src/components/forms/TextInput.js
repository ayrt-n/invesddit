import React, { useEffect, useState } from 'react';

function TextInput({ showLength, ...props }) {
  // State to track the length of the text input
  // Will be displayed with the input if showLength prop true
  const [length, setLength] = useState(props.value.length);
  useEffect(() => { setLength(props.value.length) }, [props.value]);

  return (
    <div className="relative">
      <input {...props} className="resize-none box-border scrollbar-hide overflow-x-hidden break-words h-[39px] py-[8px] pr-[68px] pl-[16px] border-[1px] border-nav-border rounded-[4px] w-full overflow-hidden outline-0 text-[14px] leading-[21px] active:border-input-focused focus:border-input-focused" />
      {showLength ?
        <div className="text-[10px] font-bold tracking-[0.5px] leading-[12px] pointer-events-none absolute bottom-[14px] right-[12px] text-feed-text">
          {length}/{props.maxLength}
        </div> :
        null
      }
    </div>
  )
}

export default TextInput;

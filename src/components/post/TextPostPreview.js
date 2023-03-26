import React from 'react';

function TextPostPreview({ body }) {
  return (
    <div className="px-[8px] mt-[5px] mb-[10px] max-h-[250px] overflow-hidden gradient-mask-b-60">
      <div className="text-[14px] leading-[21px] break-word whitespace-pre-line font-noto">
        {body}
      </div>
    </div>
  );
}

export default TextPostPreview;

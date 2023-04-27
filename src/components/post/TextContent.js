import React from 'react';

function TextContent({ body, isPreview }) {
  const fullTextClasses = "ml-[8px] mt-[12px] mb-[10px] pr-[16px]";
  const previewClasses = "px-[8px] mt-[5px] mb-[10px] max-h-[250px] overflow-hidden gradient-mask-b-60"

  return (
    <div className={isPreview ? previewClasses : fullTextClasses}>
      <div className="text-[14px] leading-[21px] break-word whitespace-pre-line font-noto" data-testid="textPostContent">
        {body}
      </div>
    </div>
  );
}

export default TextContent;

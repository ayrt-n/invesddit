import React, { useEffect, useRef, useState } from 'react';
import PillButton from '../PillButton';

function FileInput({ onChange, value, ...props }) {
  const [imagePreview, setImagePreview] = useState('');
  const uploadRef = useRef(null);

  const uploadFile = () => {
    uploadRef.current.click()
  };

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      onChange(event.target.files[0]);
    }
  };

  // Set image preview based on value of uploaded file or empty
  useEffect(() => {
    if (value) {
      setImagePreview(URL.createObjectURL(value))
    } else {
      setImagePreview('');
    }
  }, [value]);

  return (
    <div className="rounded-[4px]">
      <input ref={uploadRef} onChange={handleChange} {...props} type="file" accept="image/png,img/gif,image/jpeg,image/webp" className="hidden" />
      {imagePreview ?
        <div className="group p-[12px] relative flex justify-center flex-col nowrap min-h-[280px] text-center border-[1px] border-nav-border rounded-[4px]">
          <img onClick={uploadFile} src={imagePreview} className="rounded-[4px] w-auto cursor-pointer" alt="preview of upload" />
          <button className="hidden group-hover:block absolute top-[6px] right-[6px] rounded-full bg-canvas-light border-none p-0" type="button" onClick={() => onChange('')}>
            <svg className="w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>close-circle</title>
              <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
            </svg>
          </button>
        </div> :
        <div className="flex justify-center flex-col nowrap min-h-[280px] text-center border-dashed border-[1px] border-nav-border rounded-[4px]">
          <p className="text-primary-500">
            Drag and drop image or
            <PillButton type="button" onClick={uploadFile} variant="inverted" additionalClasses="inline-block max-w-[min-content] mx-[8px] my-[10px]">
              Upload
            </PillButton>
          </p>
        </div>
      }
    </div>
  );
}

export default FileInput;

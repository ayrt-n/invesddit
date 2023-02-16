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
      onChange(event.target.value);
    }
  };

  // Set image preview based on value of uploaded file or empty
  useEffect(() => {
    if (uploadRef.current.files && uploadRef.current.files[0]) {
      setImagePreview(URL.createObjectURL(uploadRef.current.files[0]))
    } else {
      setImagePreview('');
    }
  }, [value]);

  return (
    <div className="rounded-[4px]">
      <input value={value} ref={uploadRef} onChange={handleChange} {...props} type="file" accept="image/png,img/gif,image/jpeg,image/webp" className="hidden" />
      {imagePreview ?
        <div className="p-[12px] flex justify-center flex-col nowrap min-h-[280px] text-center border-[1px] border-nav-border rounded-[4px]">
          <img onClick={uploadFile} src={imagePreview} className="rounded-[4px] w-auto cursor-pointer" alt="preview of upload" />
          <button type="button" onClick={() => onChange('')}>Clear</button>
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

import React, { useEffect, useRef, useState } from 'react';

function ImageInput({ onChange, value, defaultImg, styles, ...props }) {
  const [imagePreview, setImagePreview] = useState(defaultImg);
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
      setImagePreview(defaultImg);
    }
  }, [value, defaultImg]);
  
  return (
    <>
      <input ref={uploadRef} onChange={handleChange} {...props} type="file" accept="image/png,image/jpeg" className="hidden" />
      <div className="relative w-full h-full cursor-pointer rounded-[4px] border-[1px] border-nav-border" onClick={uploadFile}>
        <img src={imagePreview} alt="community avatar" className="object-cover object-top" style={styles} />
        <div className="flex items-center justify-center border-[1px] border-primary-500 h-[36px] w-[36px] absolute right-[8px] bottom-[8px] bg-canvas-light rounded-full ">
          <svg className="text-primary-500 h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>camera-plus-outline</title>
            <path fill="currentColor" d="M21 6H17.8L16 4H10V6H15.1L17 8H21V20H5V11H3V20C3 21.1 3.9 22 5 22H21C22.1 22 23 21.1 23 20V8C23 6.9 22.1 6 21 6M8 14C8 18.45 13.39 20.69 16.54 17.54C19.69 14.39 17.45 9 13 9C10.24 9 8 11.24 8 14M13 11C14.64 11.05 15.95 12.36 16 14C15.95 15.64 14.64 16.95 13 17C11.36 16.95 10.05 15.64 10 14C10.05 12.36 11.36 11.05 13 11M5 6H8V4H5V1H3V4H0V6H3V9H5" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ImageInput;

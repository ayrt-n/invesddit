import React from 'react';
import { useField } from 'formik';

function PostTitleInput(label, ...props) {
  const [field, meta] = useField(props);
  
  return (
    <div>
      <textarea className="resize-none" maxLength="300" placeholder="" />
    </div>
  )
}

export default PostTitleInput;

import React, { useEffect } from 'react';
import TextInput from './forms/TextInput';
import PillButton from './PillButton';
import { useFormik } from 'formik';
import HiddenInput from './forms/HiddenInput';
import TextareaInput from './forms/TextareaInput';
import { createPost } from '../services/postService';
import { useNavigate } from 'react-router-dom';

function TextPostForm({ community }) {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    
    if (!values.title) { errors.title = 'Required' }
    if (!values.community) { errors.title = 'Required' }

    return errors;
  };

  const handlePost = (values) => {
    createPost(values).then((data) => {
      navigate(`/c/${data.data.community}/posts/${data.data.id}`);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      community: '',
    },
    validate: validate,
    onSubmit: handlePost,
  });

  useEffect(() => {
    if (community) {
      formik.setFieldValue('community', community);
    }
  }, [community]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <HiddenInput {...formik.getFieldProps('community') } />
      <div className="m-[16px]">
        <div className="mb-[8px]">
          <div className="relative mb-[6px]">
            <TextInput
              type="text"
              placeholder="Title"
              showLength
              maxLength={300}
              id="title"
              name="title"
              {...formik.getFieldProps('title')}
            />
          </div>
          <div>
            <TextareaInput
              placeholder="Text (optional)"
              id="body"
              name="body"
              {...formik.getFieldProps('body')}  
            />
          </div>
        </div>
      </div>
      <div className="px-[16px] pb-[16px]">
        <div className="w-full">
          <div className="flex items-center flex-row-reverse justify-between">
            <div>
              <PillButton type="Submit" disabled={!formik.isValid || !formik.dirty} >
                Post
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TextPostForm;

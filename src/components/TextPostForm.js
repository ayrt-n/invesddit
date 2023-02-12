import React from 'react';
import TextInput from './forms/TextInput';
import PillButton from './PillButton';
import { Formik } from 'formik';
import TextareaInput from './forms/TextareaInput';
import HiddenInput from './forms/HiddenInput';
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
  }

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          body: '',
          community: community,
        }}
        validate={validate}
        onSubmit={handlePost}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <HiddenInput id="community" name="community" />
            <div className="m-[16px]">
              <div className="mb-[8px]">
                <div className="relative mb-[6px]">
                  <TextInput type="text" placeholder="Title" showLength maxLength={300} id="title" name="title" />
                </div>
                <div>
                  <TextareaInput placeholder="Text (optional)" id="body" name="body" />
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
        )}
      </Formik>
    </>
  );
}

export default TextPostForm;

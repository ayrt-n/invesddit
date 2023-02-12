import React from 'react';
import TextInput from './forms/TextInput';
import PillButton from './PillButton';
import { Formik } from 'formik';
import TextareaInput from './forms/TextareaInput';

function TextPostForm({ community }) {
  const handlePost = (values) => {
    console.log(values);
  }

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          body: '',
          community: community,
        }}
        onSubmit={handlePost}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
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
                    <PillButton type="Submit">
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

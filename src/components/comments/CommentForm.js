import React from 'react';
import { Formik } from 'formik';
import PillButton from '../PillButton';

function CommentForm({ autoFocus }) {
  const validate = (values) => {
    const errors = {};
    if (!values.body) { errors.body = 'Required' }
    return errors;
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="border-[1px] border-post-border rounded-[4px] focus-within:border-post-border-hover">
      <div>
        <Formik
          initialValues={{body: ''}}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit} className="bg-comment-controls rounded-[4px]">
              <textarea
                id="body"
                {...formik.getFieldProps('body')}
                placeholder="What are your thoughts?"
                className="w-full !outline-none align-top h-[106px] py-[8px] px-[16px] text-[14px] leading-[21px] rounded-[4px]"
                autoFocus={autoFocus}
              />
              <div className="flex justify-end py-[4px] px-[8px]">
                <PillButton additionalClasses="w-auto text-[12px] leading-[16px]" disabled={!formik.isValid || !formik.dirty} type="submit" >
                  Comment
                </PillButton>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CommentForm;

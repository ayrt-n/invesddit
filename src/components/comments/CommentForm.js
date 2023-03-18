import React from 'react';
import { Formik } from 'formik';
import PillButton from '../PillButton';
import ProtectedButton from '../ProtectedButton';
import { createComment } from '../../services/commentService';

function CommentForm({ postId, commentId, autoFocus, addComment }) {
  const validate = (values) => {
    const errors = {};
    if (!values.body) { errors.body = 'Required' }
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    // Set resource and id based on whether postId or commentId provided
    createComment(postId, values).then((data) => {
      addComment(data);
      resetForm();
    })
    .catch((err) => {
      console.error(err);
    });
  };

  // Call to action if unauthorized user tries to post comment
  const callToAction = 'You can comment on any post with an Invesddit account.'

  return (
    <div className="border-[1px] border-post-border rounded-[4px] focus-within:border-post-border-hover">
      <div>
        <Formik
          initialValues={{body: '', commentId: commentId}}
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
              <input type="hidden" {...formik.getFieldProps('commentId')} />
              <div className="flex justify-end py-[4px] px-[8px] w-auto">
                <PillButton as={ProtectedButton} callToAction={callToAction} additionalClasses="w-[90px] text-[12px] leading-[16px]" disabled={!formik.isValid || !formik.dirty} type="submit" >
                  {/* If commentId exists, must be a reply */}
                  {commentId ? 'Reply' : 'Comment'}
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

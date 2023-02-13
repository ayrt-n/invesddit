import React from 'react';
import { Formik } from 'formik';
import PillButton from '../PillButton';
import { createComment } from '../../services/commentService';

function CommentForm({ postId, commentId, autoFocus, updateCommentSection }) {
  const validate = (values) => {
    const errors = {};
    if (!values.body) { errors.body = 'Required' }
    return errors;
  };

  const handleSubmit = (values) => {
    // Set resource and id based on whether postId or commentId provided
    const resource = postId ? 'posts' : 'comments';
    const id = postId ? postId : commentId;

    createComment(resource, id, values).then((data) => {
      updateCommentSection(data.data);
    })
    .catch((err) => {
      console.error(err);
    });
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
              <div className="flex justify-end py-[4px] px-[8px] w-auto">
                <PillButton additionalClasses="w-[90px] text-[12px] leading-[16px]" disabled={!formik.isValid || !formik.dirty} type="submit" >
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

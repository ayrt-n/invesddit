import React from 'react';
import { Formik } from 'formik';
import TextareaInput from '../forms/TextareaInput';
import PillButton from '../PillButton';
import { updateComment } from '../../services/commentService';

function EditCommentForm({ comment, updateCommentContent, closeEdit }) {
  const closeForm = (event) => {
    event.preventDefault();
    closeEdit();
  }

  const handleSubmit = (values) => {
    updateComment(comment.id, values).then(() => {
      updateCommentContent({ ...comment, ...values });
      closeEdit();
    })
    .catch(err => {
      console.error(err);
    });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.body || values.body.trim().length < 1) {
      errors.body = "Required";
    }

    return errors;
  }

  return (
    <Formik
      initialValues={{body: comment.body}}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {formik => (
        <div className="py-[8px] pl-[8px] pr-[40px] w-full">
          <form onSubmit={formik.handleSubmit}>
            <TextareaInput
              placeholder="What are your thoughts?"
              id="body"
              name="body"
              {...formik.getFieldProps('body')}
            />
            <div className="flex justify-end mt-[8px] text-[14px]">
              <PillButton onClick={closeForm} variant="inverted" className="w-auto border-none">
                Cancel
              </PillButton>
              <PillButton type="submit" className="ml-[4px] w-auto" disabled={!formik.isValid || !formik.dirty}>
                Save
              </PillButton>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default EditCommentForm;

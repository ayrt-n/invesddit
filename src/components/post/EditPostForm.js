import React from 'react';
import { Formik } from 'formik';
import TextareaInput from '../forms/TextareaInput';
import PillButton from '../PillButton';
import { updatePost } from '../../services/postService';

function EditPostForm({ postId, content, updatePostContent, closeEdit }) {
  const closeForm = (event) => {
    event.preventDefault();
    closeEdit();
  }

  const handleSubmit = (values) => {
    updatePost(postId, values).then(() => {
      updatePostContent(values);
      closeEdit();
    })
    .catch(err => {
      console.error(err);
    });
  };

  return (
    <Formik
      initialValues={{content: content}}
      onSubmit={handleSubmit}
    >
      {formik => (
        <div className="py-[8px] pl-[8px] pr-[40px] w-full">
          <form onSubmit={formik.handleSubmit}>
            <TextareaInput
              placeholder="Text (optional)"
              id="content"
              name="content"
              {...formik.getFieldProps('content')}
            />
            <div className="flex justify-end mt-[8px] text-[14px]">
              <PillButton onClick={closeForm} variant="inverted" additionalClasses="w-auto border-none">
                Cancel
              </PillButton>
              <PillButton type="submit" additionalClasses="ml-[4px] w-auto" disabled={!formik.isValid || !formik.dirty}>
                Save
              </PillButton>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default EditPostForm;

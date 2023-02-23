import React from 'react';
import { useFormik } from 'formik';
import TextInput from '../forms/TextInput';
import TextareaInput from '../forms/TextareaInput';
import PillButton from '../PillButton';
import ImageInput from '../forms/ImageInput';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';

function CommunityForm({ community }) {
  const validate = (values) => {
    const errors = {};
   
    
   
    return errors;
  };

  const handlePost = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      title: community.title || '',
      description: community.description || '',
      avatar: community.avatar || '',
      banner: community.banner || '',
    },
    validate: validate,
    onSubmit: handlePost,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-canvas-light mb-[15px] rounded-[5px] overflow-hidden w-full">
        <div className="m-[16px]">
          <div className="mb-[36px]">
            <div className="mb-[12px]">
              <label htmlFor="title" className="text-[16px] font-medium leading-[20px] mb-[4px]">
                Title (optional)
              </label>
              <p className="text-[12px] text-meta-text leading-[16px]">
                Set a Community title. This will be displayed on the Community homepage.
              </p>
            </div>
            <TextInput
              type="text"
              placeholder="Title (optional)"
              showLength
              maxLength={20}
              id="title"
              name="title"
              {...formik.getFieldProps("title")}
            />
          </div>

          <div className="mb-[36px]">
            <div className="mb-[12px]">
              <label htmlFor="description" className="text-[16px] font-medium leading-[20px] mb-[4px]">
                Description (optional)
              </label>
              <p className="text-[12px] text-meta-text leading-[16px]">
                A brief description of the Community shown on the Community homepage.
              </p>
            </div>
            <TextareaInput
              placeholder="Description (optional)"
              id="description"
              name="description"
              showLength
              maxLength="300"
              {...formik.getFieldProps("description")}
            />
          </div>

          <div className="mb-[36px]">
            <div className="mb-[12px]">
              <label className="text-[16px] font-medium leading-[20px] mb-[4px]">
                Avatar and banner image
              </label>
              <p className="text-[12px] text-meta-text leading-[16px]">
                Images must be .png or .jpg format.
              </p>
            </div>
            <div className="flex h-[120px]">
              <div className="w-[120px] mr-[12px] h-full overflow-hidden">
                <ImageInput
                  id="avatar"
                  name="avatar"
                  defaultImg={defaultAvatar}
                  value={formik.values.avatar}
                  onChange={(value) => formik.setFieldValue("avatar", value)}
                />
              </div>
              <div className="w-[412px] mr-[12px] h-full overflow-hidden">
                <ImageInput
                  id="avatar"
                  name="avatar"
                  defaultImg={defaultAvatar}
                  value={formik.values.avatar}
                  onChange={(value) => formik.setFieldValue("avatar", value)}
                />
              </div>
            </div>
          </div>

          <div className="px-[16px] pb-[16px]">
            <div className="w-full">
              <div className="flex items-center flex-row-reverse justify-between">
                <div>
                  <PillButton type="Submit" disabled={!formik.isValid || !formik.dirty} >
                    Save Changes
                  </PillButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CommunityForm;

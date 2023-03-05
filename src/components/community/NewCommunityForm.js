import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import TextInput from '../forms/TextInput';
import ErrorMessage from '../forms/ErrorMessage';
import TextareaInput from '../forms/TextareaInput';
import ImageInput from '../forms/ImageInput';
import PillButton from '../PillButton';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';
import { createCommunity } from '../../services/communityService';

function NewCommunityForm() {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    
    if (!values.sub_dir) errors.sub_dir = 'A community name is required';
    if (values.sub_dir && values.sub_dir.length > 20) {
      errors.sub_dir = 'Name cannot be greater than 20 characters';
    }

    if (values.title && values.title.length > 20) {
      errors.title = 'Title cannot be greater than 20 characters';
    }

    if (values.description && values.description > 500) {
      errors.description = 'Description cannot be greater than 500 characters';
    }

    return errors;
  };

  const handleSumbit = (values) => {
    createCommunity(values).then(data => {
      navigate(`/c/${data.data.sub_dir}`);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const formik = useFormik({
    initialValues: {
      sub_dir: '',
      title: '',
      description: '',
      avatar: '',
      banner: '',
    },
    validate: validate,
    onSubmit: handleSumbit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-canvas-light rounded-[5px] overflow-hidden w-full p-[16px]">
        <div className="mb-[36px]">
          <div className="mb-[12px]">
            <label htmlFor="name" className="text-[16px] font-medium leading-[20px] mb-[4px]">
              Name
            </label>
            <p className="text-[12px] text-meta-text leading-[16px]">
              Community names including capitalization cannot be changed.
            </p>
          </div>
          <TextInput
            type="text"
            placeholder="c/"
            showLength
            maxLength={20}
            id="name"
            name="name"
            {...formik.getFieldProps("sub_dir")}
          />
          {formik.errors.sub_dir && formik.touched.sub_dir && <ErrorMessage>{formik.errors.sub_dir}</ErrorMessage>}
        </div>
        <div className="mb-[36px]">
          <div className="mb-[12px]">
            <label htmlFor="name" className="text-[16px] font-medium leading-[20px] mb-[4px]">
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
            maxLength="500"
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
            <div className="w-[120px] mr-[12px] h-full overflow-hidden bg-canvas-light">
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
                id="banner"
                name="banner"
                defaultImg={defaultAvatar}
                value={formik.values.banner}
                onChange={(value) => formik.setFieldValue("banner", value)}
              />
            </div>
          </div>
        </div>

        <div className="px-[16px] pb-[16px]">
          <div className="w-full">
            <div className="flex items-center flex-row-reverse justify-between">
              <div>
                <PillButton type="Submit" disabled={!formik.isValid || !formik.dirty} >
                  Create Community
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewCommunityForm;

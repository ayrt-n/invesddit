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
import ContentCard from '../ContentCard';

function NewCommunityForm() {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    
    if (!values.sub_dir) errors.sub_dir = 'A community name is required';
    if (values.sub_dir && values.sub_dir.length > 20) {
      errors.sub_dir = 'Name cannot be greater than 20 characters';
    }
    if (!/^[a-zA-Z]+$/.test(values.sub_dir)) {
      errors.sub_dir = 'May only contain letters';
    }

    if (values.title && values.title.length > 20) {
      errors.title = 'Title cannot be greater than 20 characters';
    }

    if (values.description && values.description > 500) {
      errors.description = 'Description cannot be greater than 500 characters';
    }

    if (values.avatar && values.avatar.size / 1_000_000 > 2) {
      errors.avatar = "Avatar cannot be greater than 2mb"
    }

    if (values.banner && values.banner.size / 1_000_000 > 5) {
      errors.banner = "Banner cannot be greater than 5mb"
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
      <ContentCard className="w-full p-[16px] border-0">
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
          <div className="flex flex-wrap">
            <div className="w-[120px] mr-[12px] h-[120px] overflow-hidden bg-canvas-light">
              <ImageInput
                id="avatar"
                name="avatar"
                defaultImg={defaultAvatar}
                value={formik.values.avatar}
                onChange={(value) => formik.setFieldValue("avatar", value)}
              />
            </div>
            <div className="max-w-[412px] w-full h-[120px] mr-[12px] overflow-hidden">
              <ImageInput
                id="banner"
                name="banner"
                defaultImg={defaultAvatar}
                value={formik.values.banner}
                onChange={(value) => formik.setFieldValue("banner", value)}
              />
            </div>
          </div>
          {formik.errors.avatar ? (
              <ErrorMessage containerStyles={{paddingLeft: 0}}>{formik.errors.avatar}</ErrorMessage>
              ) : null}
          {formik.errors.banner ? (
            <ErrorMessage containerStyles={{paddingLeft: 0}}>{formik.errors.banner}</ErrorMessage>
            ) : null}
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
      </ContentCard>
    </form>
  );
}

export default NewCommunityForm;

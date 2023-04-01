import React from 'react';
import { useFormik } from 'formik';
import TextInput from '../forms/TextInput';
import TextareaInput from '../forms/TextareaInput';
import PillButton from '../PillButton';
import ImageInput from '../forms/ImageInput';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';
import { useNavigate } from 'react-router-dom';
import { updateCommunity } from '../../services/communityService';
import ErrorMessage from '../forms/ErrorMessage';

function EditCommunityForm({ community }) {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
   
    if (values.title.length > 20) {
      errors.title = 'Cannot be greater than 20 characters'
    }

    if (values.description.length > 500) {
      errors.description = 'Cannot be greater than 300 characters'
    }

    if (values.avatar && values.avatar.size / 1_000_000 > 2) {
      errors.avatar = "Avatar cannot be greater than 2mb"
    }

    if (values.banner && values.banner.size / 1_000_000 > 5) {
      errors.banner = "Banner cannot be greater than 5mb"
    }
   
    return errors;
  };

  const handleSubmit = (values) => {
    updateCommunity(values).then((data) => {
      navigate(`/c/${data.data.sub_dir}/`);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const formik = useFormik({
    initialValues: {
      title: community.title || '',
      description: community.description || '',
      avatar: '',
      banner: '',
      community: community.sub_dir || '',
    },
    validate: validate,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-canvas-light mb-[15px] rounded-[5px] overflow-hidden w-full">
        <div className="my-[16px]">
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
                  defaultImg={community.avatar || defaultAvatar}
                  value={formik.values.avatar}
                  onChange={(value) => formik.setFieldValue("avatar", value)}
                />
              </div>
              <div className="max-w-[412px] w-full h-[120px] mr-[12px] overflow-hidden">
                <ImageInput
                  id="banner"
                  name="banner"
                  defaultImg={community.banner || defaultAvatar}
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

export default EditCommunityForm;

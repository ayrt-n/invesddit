import React from 'react';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';
import { useFormik } from 'formik';
import ImageInput from '../forms/ImageInput';
import PillButton from '../PillButton';
import { updateAccountProfile } from '../../services/accountService';
import ErrorMessage from '../forms/ErrorMessage';

function ProfileForm({ profile }) {
  const validate = (values) => {
    const errors = {};

    if (values.avatar && values.avatar.size / 1_000_000 > 2) {
      errors.avatar = "Avatar cannot be greater than 2mb"
    }

    if (values.banner && values.banner.size / 1_000_000 > 5) {
      errors.banner = "Banner cannot be greater than 5mb"
    }

    return errors;
  };

  const handleSubmit = (values) => {
    updateAccountProfile(values).then(data => {
      window.location.reload()
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const formik = useFormik({
    initialValues: {
      avatar: '',
      banner: '',
    },
    onSubmit: handleSubmit,
    validate: validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-[36px]">
        <div className="mb-[12px]">
          <label className="text-[16px] font-medium leading-[20px] mb-[4px]">
            Avatar and banner image
          </label>
          <p className="text-[12px] text-meta-text leading-[16px]">
            Images must be .png or .jpg format.
          </p>
        </div>

        {/* Avatar and banner Input */}
        <div className="flex flex-wrap">
          <div className="w-[120px] mr-[12px] h-[120px] overflow-hidden bg-canvas-light">
            <ImageInput
              id="avatar"
              name="avatar"
              defaultImg={profile.avatar || defaultAvatar}
              value={formik.values.avatar}
              onChange={(value) => formik.setFieldValue("avatar", value)}
            />
          </div>
          <div className="max-w-[412px] w-full h-[120px] mr-[12px] overflow-hidden">
            <ImageInput
              id="banner"
              name="banner"
              defaultImg={profile.banner || defaultAvatar}
              value={formik.values.banner}
              onChange={(value) => formik.setFieldValue("banner", value)}
            />
          </div>
        </div>

        {/* Avatar and banner errors */}
        {formik.errors.avatar ? (
          <ErrorMessage containerStyles={{paddingLeft: 0}}>{formik.errors.avatar}</ErrorMessage>
          ) : null}
        {formik.errors.banner ? (
          <ErrorMessage containerStyles={{paddingLeft: 0}}>{formik.errors.banner}</ErrorMessage>
          ) : null}
      </div>

      {/* Save Changes button */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div>
            <PillButton type="Submit" disabled={!formik.isValid || !formik.dirty} >
              Save Changes
            </PillButton>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;

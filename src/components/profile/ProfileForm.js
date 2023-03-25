import React from 'react';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';
import { useFormik } from 'formik';
import ImageInput from '../forms/ImageInput';
import PillButton from '../PillButton';
import { updateAccountProfile } from '../../services/accountService';

function ProfileForm({ profile }) {
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
        <div className="flex h-[120px]">
          <div className="w-[120px] mr-[12px] h-full overflow-hidden bg-canvas-light">
            <ImageInput
              id="avatar"
              name="avatar"
              defaultImg={profile.avatar || defaultAvatar}
              value={formik.values.avatar}
              onChange={(value) => formik.setFieldValue("avatar", value)}
            />
          </div>
          <div className="w-[412px] mr-[12px] h-full overflow-hidden">
            <ImageInput
              id="banner"
              name="banner"
              defaultImg={profile.banner || defaultAvatar}
              value={formik.values.banner}
              onChange={(value) => formik.setFieldValue("banner", value)}
            />
          </div>
        </div>
      </div>
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

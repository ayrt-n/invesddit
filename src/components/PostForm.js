import React, { useEffect } from 'react';
import PostGuidelineWidget from './PostGuidelineWidget';
import TextInput from './forms/TextInput';
import TextareaInput from './forms/TextareaInput';
import PillButton from './PillButton';
import CommunitySelect from './forms/CommunitySelect';
import PostTypeSelector from './forms/PostTypeSelector';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { createPost } from '../services/postService';
import FileInput from './forms/FileInput';

function PostForm() {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    
    // All posts require a title and a community
    if (!values.title) { errors.title = 'Required' }
    if (!values.community) { errors.title = 'Required' }

    // Other post requirements depends on the post type
    if (values.postType === 'media' && !values.media) { errors.attachment = 'Required' }
    if (values.postType === 'link' && !values.link) { errors.link = 'Required' }

    // Very simple URL regex to match for period and allow double slash with https
    // This could/should be improved
    if (values.postType === 'link' && !/^((?:https?:\/\/)?[^./]+(?:\.[^./]+)+(?:\/.*)?)$/gm.test(values.link)) {
      errors.link = 'Invalid link';
    }

    return errors;
  };

  const handlePost = (values) => {
    createPost(values).then((data) => {
      navigate(`/c/${data.data.community}/posts/${data.data.id}`);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      media: '',
      link: '',
      community: '',
      postType: 'text',
    },
    validate: validate,
    onSubmit: handlePost,
  });

  useEffect(() => console.log(formik.values), [formik.values]);

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        <div className="w-[640px]">
          <div className="p-[4px] my-[16px] border-b-[1px] border-nav-border min-h-[43px]">
            <div className="text-[18px] font-medium leading-[22px]">
              Create Post
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-[8px] w-[300px]">
              <CommunitySelect setCommunity={(value) => formik.setFieldValue('community', value)} />
            </div>
            <div className="bg-canvas-light mb-[15px] rounded-[5px] overflow-hidden w-full">
              <PostTypeSelector
                value={formik.values.postType}
                setPostType={(value) => formik.setFieldValue('postType', value)}
              />
              <div className="m-[16px]">
                <div className="mb-[8px]">
                  <div className="relative mb-[6px]">
                    <TextInput
                      type="text"
                      placeholder="Title"
                      showLength
                      maxLength={300}
                      id="title"
                      name="title"
                      {...formik.getFieldProps('title')}
                    />
                  </div>
                  <div className={formik.values.postType === "text" ? "" : "hidden"}>
                    <TextareaInput
                      placeholder="Text (optional)"
                      id="body"
                      name="body"
                      {...formik.getFieldProps('body')}
                    />
                  </div>
                  <div className={formik.values.postType === "media" ? "" : "hidden"}>
                    <FileInput
                      id="media"
                      name="media"
                      setMedia={(value) => formik.setFieldValue("media", value)}
                    />
                  </div>
                  <div className={formik.values.postType === "link" ? "" : "hidden"}>
                    <TextInput
                      placeholder="URL"
                      id="link"
                      name="link"
                      {...formik.getFieldProps('link')}
                    />
                  </div>
                </div>
              </div>
              <div className="px-[16px] pb-[16px]">
                <div className="w-full">
                  <div className="flex items-center flex-row-reverse justify-between">
                    <div>
                      <PillButton type="Submit" disabled={!formik.isValid || !formik.dirty} >
                        Post
                      </PillButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="w-[312px] ml-[24px] pt-[27px] hidden md:block">
          <PostGuidelineWidget />
        </div>
      </div>
    </div>
  );
}

export default PostForm;

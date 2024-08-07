import React from 'react';
import TextInput from './forms/TextInput';
import TextareaInput from './forms/TextareaInput';
import PillButton from './PillButton';
import CommunitySelect from './forms/CommunitySelect';
import PostTypeSelector from './forms/PostTypeSelector';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { createPost } from '../services/postService';
import FileInput from './forms/FileInput';
import ContentCard from './ContentCard';

function PostForm() {
  const navigate = useNavigate();
  
  // Set initial post type based off of type query string
  // Default to text post
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPostType = searchParams.get('type') || 'text'

  const validate = (values) => {
    const errors = {};
    
    // All posts require a title and a community
    if (!values.title || values.title.trim().length < 1) { errors.title = 'Required' }
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

  // Submit post and if successful, navigate to post page
  const handleSumbit = (values) => {
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
      postType: initialPostType,
    },
    validate: validate,
    onSubmit: handleSumbit,
  });

  // Handle change in post type value
  // Removes the type query string if it exists
  const handlePostTypeChange = (value) => {
    formik.setFieldValue('postType', value);
    if (searchParams.has('type')) {
      searchParams.delete('type');
      setSearchParams(searchParams);
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-[8px] w-[300px]">
        <CommunitySelect value={formik.community} onChange={(value) => formik.setFieldValue('community', value)} />
      </div>
      <ContentCard className="mb-[15px] w-full border-0">
        <PostTypeSelector
          value={formik.values.postType}
          onChange={handlePostTypeChange}
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

            {/* Different inputs visible based on the type of post selected */}
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
                value={formik.values.media}
                onChange={(value) => formik.setFieldValue("media", value)}
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
      </ContentCard>
    </form>
  );
}

export default PostForm;

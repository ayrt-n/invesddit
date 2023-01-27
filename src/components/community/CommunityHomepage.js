import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Post from '../post/Post';
import FeedController from '../FeedController';
import CommunityHeader from './CommunityHeader';
import AboutCommunityWidget from './AboutCommunityWidget';

function CommunityHomepage() {
  let { id } = useParams();

  const community = {
    "sub_dir": "SHOP",
    "title": null,
    "description": "For all things Shopify! Discuss trends, investment ideas, and anything related to $SHOP!",
    "created_at": "2023-01-25T19:57:05.175Z",
    "memberships_count": 3,
    "posts": [
        {
            "id": 3,
            "title": "New post",
            "body": "new post",
            "created_at": "2023-01-25T19:57:05.189Z",
            "account": {
                "id": 1,
                "username": "finance_dude",
                "created_at": "2023-01-25T19:57:04.671Z"
            },
            "comments": []
        },
        {
            "id": 4,
            "title": "New post",
            "body": "new post",
            "created_at": "2023-01-25T19:57:05.190Z",
            "account": {
                "id": 1,
                "username": "finance_dude",
                "created_at": "2023-01-25T19:57:04.671Z"
            },
            "comments": []
        },
        {
            "id": 6,
            "title": "New post",
            "body": "new post",
            "created_at": "2023-01-25T19:57:05.193Z",
            "account": {
                "id": 3,
                "username": "bobby",
                "created_at": "2023-01-25T19:57:05.160Z"
            },
            "comments": []
        },
        {
            "id": 8,
            "title": "New post",
            "body": "new post",
            "created_at": "2023-01-25T19:57:05.196Z",
            "account": {
                "id": 2,
                "username": "ls_hedgie",
                "created_at": "2023-01-25T19:57:04.916Z"
            },
            "comments": []
        }
    ]
}

  return (
    <div>
      <Link to={`/c/${id}`}>
        <div className="h-[64px] bg-blue-300" />
      </Link>
      <CommunityHeader title={community.title || community.sub_dir} id={id} />

      <div className="py-[20px] px-[24px]">
        <div className="mx-auto max-w-min flex">
          {/* Main Post Feed */}
          <div className="w-[640px]">
            <FeedController />

            {community.posts.map((post) => (<Post post={post} key={post.id} />))}
          </div>

          {/* Feed Sidebar */}
          <div className="w-[312px] ml-[24px]">
            <AboutCommunityWidget
              description={community.description}
              createdAt={community.created_at}
              membershipCount={community.memberships_count}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHomepage;

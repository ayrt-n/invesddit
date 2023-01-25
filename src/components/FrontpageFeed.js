import React from 'react';
import FeedSidebarWelcome from './FeedSidebarWelcome';
import Post from './post/Post';
import FeedController from './FeedController';

function MainFeed() {
  const posts = [
    {
        "id": 1,
        "title": "New post",
        "body": "new post",
        "created_at": "2023-01-24T20:58:46.297Z",
        "community": {
            "id": 1,
            "sub_dir": "KO",
            "description": "Community dedicated to Coca Cola ($KO)! We like the drink and love the stock!",
            "memberships_count": 2
        },
        "account": {
            "id": 1,
            "username": "finance_dude",
            "created_at": "2023-01-24T20:58:45.783Z"
        },
        "comments": []
    },
    {
        "id": 2,
        "title": "New post",
        "body": "new post",
        "created_at": "2023-01-24T20:58:46.301Z",
        "community": {
            "id": 1,
            "sub_dir": "KO",
            "description": "Community dedicated to Coca Cola ($KO)! We like the drink and love the stock!",
            "memberships_count": 2
        },
        "account": {
            "id": 1,
            "username": "finance_dude",
            "created_at": "2023-01-24T20:58:45.783Z"
        },
        "comments": []
    },
    {
        "id": 3,
        "title": "New post",
        "body": "new post",
        "created_at": "2023-01-24T20:58:46.302Z",
        "community": {
            "id": 2,
            "sub_dir": "SHOP",
            "description": "For all things Shopify! Discuss trends, investment ideas, and anything related to $SHOP!",
            "memberships_count": 3
        },
        "account": {
            "id": 1,
            "username": "finance_dude",
            "created_at": "2023-01-24T20:58:45.783Z"
        },
        "comments": []
    }
];

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        {/* Main Post Feed */}
        <div className="w-[640px]">
          <FeedController />

          {posts.map((post) => (
              <Post post={post} />
          ))}
        </div>

        {/* Feed Sidebar */}
        <div className="w-[312px] ml-[24px]">
          <FeedSidebarWelcome />
        </div>
      </div>
    </div>
  );
}

export default MainFeed;

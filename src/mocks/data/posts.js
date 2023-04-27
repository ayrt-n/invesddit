const textPost = {
  status: 'published',
  id: 1,
  type: "TextPost",
  title: 'Test Post',
  comments_count: 0,
  created_at: "2023-04-14T13:49:33.617Z",
  score: 1,
  content: "Test post!",
  vote_status: null,
  account: {
      id: 1,
      username: "Test_user",
      avatar: null,
      created_at: "2023-04-14T13:47:48.760Z"
  }
};

const linkPost = {
  status: 'published',
  id: 1,
  type: "LinkPost",
  title: 'Test Post',
  comments_count: 0,
  created_at: "2023-04-14T13:49:33.617Z",
  score: 1,
  content: "https://www.google.com",
  vote_status: null,
  account: {
      id: 1,
      username: "Test_user",
      avatar: null,
      created_at: "2023-04-14T13:47:48.760Z"
  }
};

const mediaPost = {
  status: 'published',
  id: 1,
  type: "MediaPost",
  title: 'Test Post',
  comments_count: 0,
  created_at: "2023-04-14T13:49:33.617Z",
  score: 1,
  content: "test.jpg",
  vote_status: null,
  account: {
      id: 1,
      username: "Test_user",
      avatar: null,
      created_at: "2023-04-14T13:47:48.760Z"
  }
};

const deletedPost = {
  status: 'deleted',
  id: 1,
  type: "TextPost",
  title: 'Test Post',
  comments_count: 0,
  created_at: "2023-04-14T13:49:33.617Z",
  score: 1,
  content: "[Deleted]",
  vote_status: null,
  account: null
};

export { textPost, linkPost, mediaPost, deletedPost }

function addRecentPost(newPost) {
  const postsJSON = localStorage.getItem('posts');
  let posts = postsJSON ? JSON.parse(postsJSON) : [];

  // Check if post already present in recent posts array
  const postIndex = posts.findIndex(post => post.id === newPost.id);

  // If post is already present in recent posts, move it to front of array
  // Otherwise, keep most recent and add new post to front of array
  if (postIndex > -1) {
    posts = [newPost, ...posts.slice(0, postIndex), ...posts.slice(postIndex + 1)];
  } else {
    posts = posts.slice(0, 4);
    posts.unshift(newPost);
  }

  // Save recent posts to localStorage
  localStorage.setItem('posts', JSON.stringify(posts));
}

function getRecentPosts() {
  const posts = localStorage.getItem('posts');

  return posts ? JSON.parse(posts) : [];
}

function clearRecentPosts() {
  localStorage.setItem('posts', []);
}

export {
  addRecentPost,
  getRecentPosts,
  clearRecentPosts,
}
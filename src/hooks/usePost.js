import useFetch from './useFetch';

export default function usePost(post_id) {
  const [post, setPost] = useFetch(`api/v1/posts/${post_id}`);

  const updatePost = (updatedPost) => {
    setPost((prev) => ({ ...prev, ...updatedPost }));
  };

  return [post, updatePost];
}

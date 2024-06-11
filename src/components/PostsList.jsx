import { useLoaderData } from 'react-router-dom';


import Post from "./Post";
import styles from "./PostsList.module.css";


function PostsList() {
  const posts = useLoaderData();

/*
  const addPostHandler = (postData) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  };
*/

  return (
    <>
      {/* The posts list */}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && <p className={styles.noPosts}>No posts yet!</p>}
    </>
  );
}

export default PostsList;

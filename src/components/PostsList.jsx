import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

PostsList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func,
};

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

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

  return (
    <>
      {isPosting && ( // Conditional rendering
        <Modal onClose={onStopPosting}>
          <NewPost onAddPost={addPostHandler} onCancel={onStopPosting} />
        </Modal>
      )}

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

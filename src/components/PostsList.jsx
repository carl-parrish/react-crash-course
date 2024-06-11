import { useLoaderData } from 'react-router-dom';


import Post from "./Post";
import styles from "./PostsList.module.css";


function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {/* The posts list */}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && <p className={styles.noPosts}>No posts yet!</p>}
    </>
  );
}

export default PostsList;

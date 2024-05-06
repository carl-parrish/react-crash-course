import Post from './Post';
import styles from './PostsList.module.css';

function PostsList() {
  return (
    <ul className={styles.posts}>
        <Post author="Maximilian" body="React.js is awesome!" />
        <Post author="Manuel" body="Check out the full course!" />
        <Post author="Julie" body="I love React.js!" />
    </ul>
  );
}

export default PostsList;
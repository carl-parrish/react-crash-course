import styles from './Post.module.css';

function Post({author, body}) {
  return (
    <li className={styles.post}>
      <h2>{author}</h2>
      <p>{body}</p>
    </li>
  );
}

export default Post
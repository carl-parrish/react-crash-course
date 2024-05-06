import styles from './Post.module.css';

function Post(props) {
  return (
    <li className={styles.post}>
      <h2>{props.author}</h2>
      <p>{props.body}</p>
    </li>
  );
}

export default Post
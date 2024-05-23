import styles from './Post.module.css';
import PropTypes from 'prop-types';

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired, 
}

function Post({ author, body }) {
  return (
    <li className={styles.post}>
      <h2>{author}</h2>
      <p>{body}</p>
    </li>
  );
}

export default Post
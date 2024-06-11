import { Link } from 'react-router-dom';

import styles from './Post.module.css';
import PropTypes from 'prop-types';

Post.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired, 
}

function Post({ id, author, body }) {
  return (
    
    <li className={styles.post}>
      <Link to={`/posts/${id}`}>
      <h2>{author}</h2>
      <p>{body}</p>
      </Link>
    </li>
    
  );
}

export default Post
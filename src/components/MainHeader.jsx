import { MdPostAdd, MdMessage } from "react-icons/md"; // Importing icons from react-icons
import PropTypes from "prop-types"; // Importing PropTypes from prop-types
import styles from "./MainHeader.module.css";

MainHeader.propTypes = {
  onCreatePost: PropTypes.func.isRequired,
};

function MainHeader({ onCreatePost }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;

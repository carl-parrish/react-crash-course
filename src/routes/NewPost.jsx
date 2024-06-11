import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NewPost.module.css";
import PropTypes from "prop-types";
import Modal from "../components/Modal";

NewPost.propTypes = {
  onAddPost: PropTypes.func,
  onCancel: PropTypes.func,
};

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const changeBodyHandler = (event) => setEnteredBody(event.target.value);
  const changeAuthorHandler = (event) => setEnteredAuthor(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  };

  // onBodyChange={changeBodyHandler}
  // onAuthorChange={changeAuthorHandler}

  return (
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Add Post</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;

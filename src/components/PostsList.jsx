import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

import { useState } from "react";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler}
      />

      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
        <Post author="Julie" body="I love React.js!" />
      </ul>
    </>
  );
}

export default PostsList;

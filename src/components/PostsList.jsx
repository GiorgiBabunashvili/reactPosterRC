import React, { useState } from "react";
import classe from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";

const PostsList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHanlder(e) {
    setEnteredBody(e.target.value);
  }

  function authorChangeHanlder(e) {
    setEnteredAuthor(e.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHanlder}
        onAuthorChange={authorChangeHanlder}
      />
      <ul className={classe.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
};

export default PostsList;

import React from "react";
import classe from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={classe.posts}>
        <Post author="Giorgi" body="React.js is awesome" />
        <Post author="Tiko" body="Hello World" />
      </ul>
    </>
  );
};

export default PostsList;

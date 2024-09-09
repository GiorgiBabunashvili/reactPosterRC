import React from "react";
import classe from "./PostsList.module.css";
import Post from "./Post";

const PostsList = () => {
  return (
    <ul className={classe.posts}>
      <Post author="Giorgi" body="React.js is awesome" />
      <Post author="Tiko" body="Hello World" />
    </ul>
  );
};

export default PostsList;

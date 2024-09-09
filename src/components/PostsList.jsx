import React, { useState } from "react";
import classe from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostsList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalhandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHanlder(e) {
    setEnteredBody(e.target.value);
  }

  function authorChangeHanlder(e) {
    setEnteredAuthor(e.target.value);
  }

  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalhandler}>
  //       <NewPost
  //         onBodyChange={bodyChangeHanlder}
  //         onAuthorChange={authorChangeHanlder}
  //       />
  //     </Modal>
  //   );
  // }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalhandler}>
          <NewPost
            onBodyChange={bodyChangeHanlder}
            onAuthorChange={authorChangeHanlder}
          />
        </Modal>
      )}
      <ul className={classe.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
};

export default PostsList;

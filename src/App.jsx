import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function hideModalhandler() {
    setModalIsVisible(false);
  }

  function showModalhandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalhandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalhandler}
        />
      </main>
    </>
  );
}

export default App;

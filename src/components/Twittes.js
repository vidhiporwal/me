import React from "react";
import CreateTweet from "./CreateTweet";
import Post from "./Post";
const Twittes = () => {
  return (
    <div className="posts">
      <div className="posts__home">Home</div>
      <CreateTweet />
      <Post />
    </div>
  );
};

export default Twittes;


import React, { useState } from "react";
import a from '../assets/a.jpg'
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
  FaComment,
  FaHeart,
  FaRegCheckCircle,
  FaEdit,
  FaTrash
} from "react-icons/fa";

const CreateTweet = ({ createNewTweet }) => {
  const [newTweet, setNewTweet] = useState("");

  const handleInputChange = (e) => {
    setNewTweet(e.target.value);
  };

  const handleCreateTweet = () => {
    if (newTweet.trim() !== "") {
      createNewTweet(newTweet);
      setNewTweet("");
    }
  };

  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src={a} alt="profile img" />
        </div>
        <div className="create__input">
          <input
            type="text"
            className="create__control"
            placeholder="What's happening?"
            value={newTweet}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
  <button
    onClick={handleCreateTweet}
    className="tweet-button"
  >
    Tweet
  </button>
</div>

      </div>
    </div>
  );
};

const Tweet = ({ tweet, handleEditTweet, handleDeleteTweet }) => {
  return (
    <div className="postss" key={tweet.id}>
      <div className="postss__first">
        <div className="posts__first__img">
          <img src={tweet.image} alt="Profile" className="profile-image" />
        </div>
        <div className="posts__first__name">
          <strong>{tweet.firstName}</strong>{" "}
          <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @{tweet.username} <span>{tweet.date}</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">{tweet.tweet}</div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> {tweet.numberOfComments}
          </span>
          <span>
            <FaHeart className="re" /> {tweet.numberOfLikes}
          </span>
         
          <span>
            <FaEdit onClick={() => handleEditTweet(tweet.id)} />
          </span>
          <span>
            <FaTrash onClick={() => handleDeleteTweet(tweet.id)} />
          </span>
        </div>
      </div>
    </div>
  );
};

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  const createNewTweet = (newTweet) => {
    const newTweetObject = {
      id: tweets.length,
      username: "vidhi24010011",
      date: new Date().toISOString().split("T")[0],
      tweet: newTweet,
      numberOfLikes: 0,
      numberOfComments: 0,
      image: a,
      firstName: "Vidhi"
    };

    setTweets([...tweets, newTweetObject]);
  };

  const handleEditTweet = (tweetId) => {
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        const updatedTweetContent = prompt("Enter the updated tweet content:");
        return {
          ...tweet,
          tweet: updatedTweetContent,
        };
      }
      return tweet;
    });
  
    setTweets(updatedTweets);
  };
  
  const handleDeleteTweet = (tweetId) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);
    setTweets(updatedTweets);
  };

  return (
    <div>
      <CreateTweet createNewTweet={createNewTweet} />
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          handleEditTweet={handleEditTweet}
          handleDeleteTweet={handleDeleteTweet}
        />
      ))}
    </div>
  );
};

export default Tweets;

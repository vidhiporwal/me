import React, { useState } from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaHeart,
  FaEdit,
  FaTrash
} from "react-icons/fa";
import './Post.css'

import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/g.jpg';
import g from '../assets/g.jpg';



const Posts = () => {
  const [tweets, setTweets] = useState([
    {
        id : 0,
              username: "tech_geek",
              date: "2023-02-08",
              tweet: "Just got my hands on the latest smartphone and I am blown away by its features and performance! #techlove",
              numberOfLikes: 250,
              numberOfComments: 60,
              image: g,
              firstName: "John"
            },
            {
        id : 1,
              username: "foodie_gal",
             date: "2023-02-08",
              tweet: "Had the most amazing meal at the new restaurant in town. The flavors were out of this world! #foodie #yum",
              numberOfLikes: 170,
              numberOfComments: 40,
              firstName: "Jane",
              image: b,
            },
            {
        id : 2,
              username: "bookworm",
             date: "2023-02-09",
              tweet: "Just finished reading the latest bestseller and I can't wait to discuss it with my book club next week! #booknerd #booklover",
              numberOfLikes: 200,
              numberOfComments: 50,
              firstName: "Jack",
              image: c,
  
            },
            {
        id :  3,
              username: "fitness_fanatic",
             date: "2023-02-09",
              tweet: "Had an intense workout at the gym this morning and feeling great! #fitnessmotivation #fitlife",
              numberOfLikes: 140,
              numberOfComments: 30,
              image: f,
  
              firstName: "Jessica"
            },
            {
        id : 4,
              username: "nature_lover",
             date: "2023-02-10",
              tweet: "Just took a hike in the mountains and it was breathtaking! The beauty of nature never ceases to amaze me. #outdooradventures #hiking",
              numberOfLikes: 180,
              numberOfComments: 40,
              image: e,
  
              firstName: "Sarah"
            },
        
            {
        id : 5,
              username: "coffee_lover",
             date: "2023-02-10",
              tweet: "My twitter anniversary today!",
              numberOfLikes: 180,
              numberOfComments: 40,
              image: a,
              firstName: "Gill"
            },
        
            {
        id : 6,
              username: "cool_dude",
             date: "2023-02-10",
              tweet: "Monday blues ;/",
              numberOfLikes: 180,
              numberOfComments: 40,
              image: d,
  
              firstName: "Stella"
            },
        
            {
        id : 7,
              username: "the_perfectionist",
             date: "2023-02-10",
              tweet: "Good things come to those who wait",
              numberOfLikes: 18,
              numberOfComments: 40,
              image: g,
              firstName: "Adam"
            },
        
            {
        id : 8,
              username: "unknown000",
             date: "2023-02-10",
              tweet: "Today is my Birthday :)",
              numberOfLikes: 10,
              numberOfComments: 4,
              image: f,
              firstName: "Justin"
            },
            {
        id : 9,
              username: "jamesbond",
             date: "2023-02-10",
              tweet: "You need to fight for you want. #hustle #life",
              numberOfLikes: 120,
              numberOfComments: 47,
              image: c,
              firstName: "Elon"
            }
    
  ]);

  const [newTweet, setNewTweet] = useState("");

  const handleInputChange = (event) => {
    setNewTweet(event.target.value);
  };

  const handleCreateTweet = () => {
    if (newTweet.trim() !== "") {
      const newTweetObject = {
        id: tweets.length,
        username: "vidhiporwal2401",
        date: new Date().toISOString().split("T")[0],
        tweet: newTweet,
        numberOfLikes: 0,
        numberOfComments: 0,
        image: a,
        firstName: "vidhi"
      };

      setTweets([...tweets, newTweetObject]);
      setNewTweet("");
    }
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
      <div>
        {tweets.map((tweet) => (
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
        ))}
      </div>
    </div>
  );
};

export default Posts;

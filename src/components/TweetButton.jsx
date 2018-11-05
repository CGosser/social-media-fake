import React from "react";

function TweetButton(props){
  const tweetButtonStyles={
    padding: '10px',
    borderRadius: '30px',
    width: '15%',
    border: '2px solid skyBlue',
    fontSize: '14px',
    color: 'gray'
  }
  return (
    <button style={tweetButtonStyles}>Tweet</button>
  );
};


export default TweetButton;

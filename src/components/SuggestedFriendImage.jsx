import React from "react";

function SuggestedFriendImage() {
  const suggestedFriendImageStyles = {
    width: "35px",
    height: "35px",
    backgroundColor: "yellow",
    padding: "5px",
    marginRight: "15px"
  }
  return(
      <img style={suggestedFriendImageStyles} src='https://image.flaticon.com/icons/png/128/118/118781.png'></img>
  );
}

export default SuggestedFriendImage;

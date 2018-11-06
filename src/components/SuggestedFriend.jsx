import React from "react";
import SuggestedFriendImage from "./SuggestedFriendImage";
import SuggestedFriendContainerRight from "./SuggestedFriendContainerRight";

function SuggestedFriend() {
  const suggestedFriendStyles = {
    display: "flex",
    padding: "20px"
  }
  return(
    <div style={suggestedFriendStyles}>
      <SuggestedFriendImage/>
      <SuggestedFriendContainerRight/>
    </div>
  );
}

export default SuggestedFriend;

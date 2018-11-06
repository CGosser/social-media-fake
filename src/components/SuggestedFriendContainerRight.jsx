import React from "react";
import SuggestedFriendName from "./SuggestedFriendName";
import SuggestedFriendButton from "./SuggestedFriendButton";

function SuggestedFriendContainerRight() {
  const suggestedFriendContainerRightStyles = {
  
  }
  return(
    <div style={suggestedFriendContainerRightStyles}>
      <SuggestedFriendName/>
      <SuggestedFriendButton/>
    </div>
  );
}

export default SuggestedFriendContainerRight;

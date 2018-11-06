import React from "react";
import SuggestedFriend from "./SuggestedFriend";

function BodyRightContainer() {
  const bodyRightContainerStyles = {
    width: "18%",
    border: "2px solid lightgray"
  }
  return(
    <div style={bodyRightContainerStyles}>
      <h3>Lorem ipsum</h3>
      <SuggestedFriend/>
    </div>
  );
}

export default BodyRightContainer;

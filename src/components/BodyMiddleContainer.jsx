import React from "react";
import StatusUpdateContainer from "./StatusUpdateContainer";
import PostContainer from "./PostContainer";

function BodyMiddleContainer() {
  const bodyMiddleContainerStyles = {
    width: "42%",
    display: 'flex',
    flexDirection: 'column'
  }
  return(
    <div style={bodyMiddleContainerStyles}>
      <StatusUpdateContainer/>
      <PostContainer/>
    </div>
  );
}

export default BodyMiddleContainer;

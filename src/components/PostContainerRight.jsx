import React from "react";
import PostUserName from "./PostUserName";
import PostUserContent from "./PostUserContent";

function PostContainerRight() {
  const postContainerRightStyles = {

  }
  return(
    <div style={postContainerRightStyles}>
      <PostUserName/>
      <PostUserContent/>
    </div>
  );
}

export default PostContainerRight;

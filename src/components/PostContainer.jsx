import React from "react";
import PostImage from "./PostImage";
import PostContainerRight from "./PostContainerRight";

function PostContainer() {
  const postContainerStyles = {
    display: "flex",
    padding: "20px",
    border: "2px solid lightGray",
    // width: "100%"
  }
  return(
    <div style={postContainerStyles}>
      <PostImage/>
      <PostContainerRight/>
    </div>
  );
}

export default PostContainer;

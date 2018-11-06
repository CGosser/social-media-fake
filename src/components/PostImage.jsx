import React from "react";

function PostImage() {
  const postImageContainerStyles = {
    marginRight: "20px"
  }
  const postImageStyles = {
    width: "35px",
    backgroundColor: "yellow",
    padding: "5px"
  }
  return(
    <div style={postImageContainerStyles}>
      <img style={postImageStyles} src='https://image.flaticon.com/icons/png/128/118/118781.png'></img>
    </div>
  );
}

export default PostImage;

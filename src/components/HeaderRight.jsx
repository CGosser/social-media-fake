import React from "react";
import SearchBox from "./SearchBox";
import TweetButton from "./TweetButton";

function HeaderRight(prop){
  const headerRightStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%'
  }
  return (
    <div style={headerRightStyles}>
      <SearchBox/>
      <TweetButton/>
    </div>
  );
}

export default HeaderRight;

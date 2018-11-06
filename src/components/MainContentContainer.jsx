import React from "react";
import BodyLeftContainer from "./BodyLeftContainer";
import BodyMiddleContainer from "./BodyMiddleContainer";
import BodyRightContainer from "./BodyRightContainer";
function MainContentContainer(){
  const mainContentContainerStyles= {
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    <div style={mainContentContainerStyles}>
      <BodyLeftContainer/>
      <BodyMiddleContainer/>
      <BodyRightContainer/>
    </div>
  );
}


export default MainContentContainer;

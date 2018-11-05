import React from "react";
import ProfileContainer from "./ProfileContainer";
import AboutMe from "./AboutMe";

function BodyLeftContainer(props){

  const bodyLeftContainerStyles= {
    width: '36%',
    display: 'flex',
    flexDirection: 'column'
  }
  return (
    <div style={bodyLeftContainerStyles}>
    <ProfileContainer/>
    <AboutMe/>
    </div>
  );
}

export default BodyLeftContainer;

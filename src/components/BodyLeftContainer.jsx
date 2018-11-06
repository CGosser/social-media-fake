import React from "react";
import ProfileContainer from "./ProfileContainer";
import AboutMe from "./AboutMe";

function BodyLeftContainer(props){

  const bodyLeftContainerStyles= {
    width: '32%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '40px'
  }
  return (
    <div style={bodyLeftContainerStyles}>
    <ProfileContainer/>
    <AboutMe/>
    </div>
  );
}

export default BodyLeftContainer;

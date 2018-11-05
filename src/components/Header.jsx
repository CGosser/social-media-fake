import React from "react";
import Navigation from "./Navigation";
import HeaderRight from "./HeaderRight";

function Header(prop){
  const headerStyles = {
    width: '100%',
    borderBottom: '2px solid lightgray',
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    <div style={headerStyles}>
    <Navigation/>
    <HeaderRight/>
    </div>
  );
};


export default Header;

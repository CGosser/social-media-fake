import React from "react";


function SearchBox(props){
  const searchBoxStyles={
    padding: '10px',
    borderRadius: '30px',
    width: '200px',
    border: '2px solid skyBlue',
    fontSize: '14px',
    color: 'gray',
    marginRight: '20px'
  }
  return (
  <form>
  <input style={searchBoxStyles} placeholder= "Search"></input>
  </form>
  );
};


export default SearchBox;

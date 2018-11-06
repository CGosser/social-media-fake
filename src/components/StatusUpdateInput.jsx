import React from "react";

function StatusUpdateInput() {
  const statusUpdateInputStyles = {
    width: "240px",
    border: "2px solid #00b5f3"
  }
  return(
    <input placeholder="What's happening?" style={statusUpdateInputStyles}></input>
  );
}

export default StatusUpdateInput;

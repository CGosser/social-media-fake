import React from "react";
import StatusUpdateImage from "./StatusUpdateImage";
import StatusUpdateInput from "./StatusUpdateInput";

function StatusUpdateContainer() {
  const statusUpdateContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#9BD1E8",
    // width: "100%",
    padding: "15px 10px 15px 30px"
  }
  return(
    <div style={statusUpdateContainerStyles}>
      <StatusUpdateImage/>
      <StatusUpdateInput/>
    </div>
  );
}

export default StatusUpdateContainer;

import React from 'react';
import PropTypes from 'prop-types';

function Status(props) {

  const statusStyles = {
    border: '2px solid #000',
    marginBottom: '10px',
    paddingLeft: '10px'
  };

  return(
    <div style={statusStyles}>
      <h3>{props.name}</h3>
      <p>Status: {props.status}</p>
    </div>
  );
}

Status.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string
};

export default Status;

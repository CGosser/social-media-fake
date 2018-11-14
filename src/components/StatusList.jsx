import React from 'react';
import Status from './Status';
import PropTypes from 'prop-types';

function StatusList(props) {

  return(
    <div>
      <h2>Add Status</h2>
      <hr/>
      <h2>Current Status</h2>
      <div>
        {props.statusList.map((status, index) =>
          <Status
            name={status.name}
            status={status.status}
            key={index}
          />
        )}
      </div>
    </div>
  );
}

StatusList.propTypes = {
  statusList: PropTypes.array
};

export default StatusList;

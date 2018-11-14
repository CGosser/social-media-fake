import React from 'react';
import NewStatusForm from './NewStatusForm';
import PropTypes from 'prop-types';

function NewStatusControl(props) {
  return(
    <div>
      <NewStatusForm
        onNewStatusCreation={props.onNewStatusCreation}
      />
    </div>
  );
}

NewStatusForm.propTypes = {
  onNewStatusCreation: PropTypes.func
};

export default NewStatusControl;

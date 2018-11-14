import React from 'react';
import PropTypes from 'prop-types';

function NewStatusForm(props) {
  let _name = null;
  let _status = null;

  function handleNewStatusFormSubmission(event) {
    event.preventDefault();
    props.onNewStatusCreation({name: _name.value, status: _status.value});
    _name.value = '';
    _status.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewStatusFormSubmission}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          ref={(input) => {_name = input;}}
        />
        <label htmlFor='status'>Status</label>
        <input
          id='status'
          ref={(input) => {_status = input;}}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

NewStatusForm.propTypes = {
  onNewStatusCreation: PropTypes.func
};

export default NewStatusForm;

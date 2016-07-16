import React, { PropTypes } from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';

function PlayerCreateWidgetForm(props) {
  return (
    <form onSubmit={props.addPlayer}>
      <div>
        <Field name="name" component={TextField} label="Name" />
      </div>
      <div>
        <Field name="location" component={TextField} label="Location" />
      </div>
      <div>
        <Field name="cpuId" component={TextField} label="Cpu Id" />
      </div>
    </form>
  );
}

PlayerCreateWidgetForm.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'PlayerCreateWidgetForm',
  fields: ['name', 'location', 'cpuId'],   // a unique identifier for this form
})(PlayerCreateWidgetForm);

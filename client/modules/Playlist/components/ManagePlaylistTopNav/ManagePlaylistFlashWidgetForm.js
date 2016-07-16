import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form';

// Client side validation
const validate = values => {
  const errors = {};
  const requiredFields = ['interval'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const renderTextField = field => (
  <TextField
    hintText={field.input.label}
    floatingLabelText={field.input.label}
    errorText={field.touched && field.error}
    {...field.input}
  />
);

function ManagePlaylistFlashWidgetForm(props) {
  return (
    <form onSubmit={props.addPlayer}>
      <div>
        <Field name="interval" component={renderTextField} label="Time in Mins" />
      </div>
      <div>
        <FlatButton type="submit" value="submit" />
      </div>
    </form>
  );
}

ManagePlaylistFlashWidgetForm.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ManagePlaylistFlashWidgetForm',  // a unique identifier for this form
  validate,
})(ManagePlaylistFlashWidgetForm);

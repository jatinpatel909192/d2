import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form';

// Client side validation
const validate = values => {
  const errors = {};
  const requiredFields = ['title', 'titleHindi', 'titleGujrati'];
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

function ContentEditWidgetForm(props) {
  return (
    <form onSubmit={props.updatePlayer}>
      <div>
        <Field name="title" component={renderTextField} label="Title" />
      </div>
      <div>
        <Field name="titleHindi" component={renderTextField} label="Title Hindi" />
      </div>
      <div>
        <Field name="titleGujrati" component={renderTextField} label="Title Gujrati" />
      </div>
      <div>
        <FlatButton type="submit" value="submit" />
      </div>
    </form>
  );
}

ContentEditWidgetForm.propTypes = {
  updatePlayer: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ContentEditWidgetForm',  // a unique identifier for this form
  validate,
})(ContentEditWidgetForm);

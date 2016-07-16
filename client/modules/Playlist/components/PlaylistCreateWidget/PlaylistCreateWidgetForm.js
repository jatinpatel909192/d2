import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form';
import { Column } from 'react-foundation';

// Client side validation
const validate = values => {
  const errors = {};
  const requiredFields = ['title'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const styles = {
  main:
  { width: '100%',
  paddingLeft: '15px' },
  input: {
    boxShadow: 'none',
  },
  paper: { padding: '10px' },
  button: {
    width: '100%',
    height: '48px',
    verticalAlign: 'middle',
  },
};

const renderTextField = field => (
  <TextField
    hintText={field.input.label}
    floatingLabelText={field.input.label}
    errorText={field.touched && field.error}
    {...field.input}
  />
);

function PlaylistCreateWidgetForm(props) {
  return (
    <form onSubmit={props.onSave}>
      <div>
      </div>
      <Column large={10}>
        <Field name="title" component={renderTextField} label="Name" />
      </Column>
      <Column large={2}>
        <FlatButton
          style={styles.button}
          onTouchTap={props.onSave}
          label="Create"
          secondary={true} />
      </Column>
    </form>
  );
}

PlaylistCreateWidgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'PlaylistCreateWidgetForm',  // a unique identifier for this form
  validate,
})(PlaylistCreateWidgetForm);

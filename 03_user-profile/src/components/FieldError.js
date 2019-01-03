import React from 'react';
import './FieldError.css';

class FieldError extends React.Component {
  render() {
    const field = this.props.fieldName;
    const fieldError = this.props.formErrors[field];

    if (!fieldError) return null;

    return <div className="field-error">{fieldError}</div>;
  }
}

export default FieldError;
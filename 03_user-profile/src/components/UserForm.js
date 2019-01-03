import React from 'react';
import serialize from 'serialize-javascript';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

import FieldError from './FieldError';
import './UserForm.css';

library.add(faAsterisk);

class UserForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    jobTitle: '',
    experience: '',
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    formIsValid: false,
    formErrors: {
      firstName: '',
      lastName: '',
      email: ''
    }
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      dob: this.state.dob,
      jobTitle: this.state.jobTitle,
      experience: this.state.experience
    };

    // const url = e.target.action;
    const url = 'https://httpbin.org/anything';

    const init = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: serialize(data),
    }

    const response = await fetch(url, init);
    const json = await response.json();
    this.props.onSubmissionReturned(json.data);
  };

  firstNameIsValid = () => {
    const field = document.getElementById('firstName');
    return field.value.length > 1;
  };

  lastNameIsValid = () => {
    const field = document.getElementById('lastName');
    return field.value.length > 1;
  };

  emailIsValid = () => {
    const field = document.getElementById('email');
    // This is not the most robust email address regex available.
    return field.value.match(/.+@.+\..+/) !== null;
  };

  onInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name
    const value = e.target.value;

    const firstNameIsValid = this.firstNameIsValid();
    const lastNameIsValid = this.lastNameIsValid();
    const emailIsValid = this.emailIsValid();

    const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

    this.setState({formIsValid});

    const validate = (name, value) => {
      const formErrors = this.state.formErrors;
      switch(name) {
        case 'firstName':
          const firstNameError = !(firstNameIsValid || value.length === 0);
          this.setState({firstNameError});
          formErrors[name] = firstNameError ? 'Please enter your first name.' : '';
          break;

        case 'lastName':
          const lastNameError = !(lastNameIsValid || value.length === 0);
          this.setState({lastNameError});
          formErrors[name] = lastNameError ? 'Please enter your last name.' : '';
          break;

        case 'email':
          const emailError = !(emailIsValid || value.length === 0);
          this.setState({emailError});
          formErrors[name] = emailError ? 'Please enter a valid email address.' : '';
          break;
        default:
          break;
      }

      this.setState({formErrors});
    };

    this.setState({[name]: value}, () => validate(name, value));
  }

  render() {
    const firstNameError = this.state.firstNameError;
    const lastNameError = this.state.lastNameError;
    const emailError = this.state.emailError;

    const fieldClass = ['field']
    const requiredFieldClass = fieldClass.concat('required');
    const invalidFieldClass = requiredFieldClass.concat('invalid');

    const fnClass = firstNameError ? invalidFieldClass : requiredFieldClass;
    const lnClass = lastNameError ? invalidFieldClass : requiredFieldClass;
    const emailClass = emailError ? invalidFieldClass : requiredFieldClass;

    return (
      <div className="wrapper">
        <div className="header">
          <h1>User Profile</h1>
        </div>
        <form className="user-form"
          action="https://api.dummyendpoint/me/profile"
          // PUT method is not valid in HTML forms, but will be handled in submit
          // handler
          method="post"
          onSubmit={this.onFormSubmit}
        >
          <div className="note"><FontAwesomeIcon icon="asterisk" /> : Required Field</div>
          <div className={fnClass.join(' ')}>
            <label htmlFor="firstName">First Name:</label>
            <input id="firstName" name="firstName" type="text" autoFocus required
              value={this.state.firstName}
              onChange={(e) => this.onInputChange(e)}
            />
            <FontAwesomeIcon icon="asterisk" />
            <FieldError fieldName="firstName" formErrors={this.state.formErrors} />
          </div>

          <div className={lnClass.join(' ')}>
            <label htmlFor="lastName">Last Name:</label>
            <input id="lastName" name="lastName" type="text" required
              value={this.state.lastName}
              onChange={this.onInputChange}
            />
            <FontAwesomeIcon icon="asterisk" />
            <FieldError fieldName="lastName" formErrors={this.state.formErrors} />
          </div>

          <div className={emailClass.join(' ')}>
            <label htmlFor="email">Email Address:</label>
            <input id="email" name="email" type="email" required
              value={this.state.email}
              onChange={(e) => this.onInputChange(e)}
            />
            <FontAwesomeIcon icon="asterisk" />
            <FieldError fieldName="email" formErrors={this.state.formErrors} />
          </div>

          <div className="field">
            <label htmlFor="dob">Birth Date:</label>
            <input id="dob" name="dob" type="date"
              value={this.state.dob}
              onChange={e => this.setState({dob: e.target.value})}
              placeholder="DD-MON-YYYY"
            />
          </div>

          <div className="field">
            <label htmlFor="job-title">Preferred Job Title:</label>
            <input id="job-title" name="job-title" type="text"
              value={this.state.jobTitle}
              onChange={e => this.setState({jobTitle: e.target.value})}
            />
          </div>

          <div className="field">
            <label htmlFor="experience">Years of Experience:</label>
            <input id="experience" name="experience" type="number"
              value={this.state.experience}
              onChange={e => this.setState({experience: e.target.value})}
            />
          </div>
          <div>
            <input type="submit" disabled={!this.state.formIsValid} />
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
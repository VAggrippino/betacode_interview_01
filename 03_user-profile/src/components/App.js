import React from 'react';
import UserForm from './UserForm';
import SubmissionResults from './SubmissionResults';

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    jobTitle: '',
    experience: '',
    submissionData: null
  };

  updateUserInfo = (userInfo) => {
    Object.keys(userInfo).forEach((key) => {
      const value = userInfo[key];
      this.setState({[key]: value});
    });
  };

  onSubmissionReturned = (submissionData) => {
    this.setState({submissionData});
  };

  render() {
    return (
      <div>
        <UserForm
          updateUserInfo={this.updateUserInfo}
          userInfo={this.state}
          onSubmissionReturned={this.onSubmissionReturned}
        />
        <SubmissionResults data={this.state.submissionData} />
      </div>
    );
  }
}

export default App;
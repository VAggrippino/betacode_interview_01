import React from 'react';
import UserForm from './UserForm';
import SubmissionResults from './SubmissionResults';

class App extends React.Component {
  state = {
    submissionData: null
  };

  onSubmissionReturned = (submissionData) => {
    this.setState({submissionData});
  };

  render() {
    return (
      <div>
        <UserForm
          onSubmit={this.onSubmit}
          onSubmissionReturned={this.onSubmissionReturned}
        />
        <SubmissionResults data={this.state.submissionData} />
      </div>
    );
  }
}

export default App;
import React from 'react';
import './SubmissionResults.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faCheckCircle);

class SubmissionResults extends React.Component {
  dataTable = (jsonString) => {
    const data = JSON.parse(jsonString);
    const rows = Object.entries(data).map((entry) => {
      return <tr key={entry[0]}><td>{entry[0]}</td><td>{entry[1]}</td></tr>;
    });
    return rows;
  };

  render() {
    if (this.props.data === null) {
      return null;
    }

    return (
      <div className="submission-results">
        <div className="dialog">
          <div className="message">
            <FontAwesomeIcon icon={['far', 'check-circle']} />
            <h3>Thank You</h3>
            <p>Your information was submitted successfully.</p>
          </div>
          <table>
            <tbody> 
              {this.dataTable(this.props.data)}
            </tbody>
          </table>
          <div className="buttons">
            <button className="reset" onClick={this.props.onReset}>Reset</button>
          </div>
        </div>
      </div>
    );
  };
}

export default SubmissionResults;
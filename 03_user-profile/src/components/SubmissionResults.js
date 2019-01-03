import React from 'react';
import './SubmissionResults.css';

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
        <table>
          <tbody> 
            {this.dataTable(this.props.data)}
          </tbody>
        </table>
      </div>
    );
  };
}

export default SubmissionResults;
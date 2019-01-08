import React from 'react';

class GenerateButton extends React.Component {
  render() {
    return (
      <button
        className="generate-button"
        onClick={this.props.generateEvent}
      >Generate</button>
    );
  }
}

export default GenerateButton;
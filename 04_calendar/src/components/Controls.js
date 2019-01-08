import React from 'react';
import CreateForm from './CreateForm';
import GenerateButton from './GenerateButton';
import './scss/Controls.scss';

class Controls extends React.Component {
  render() {
    return (
      <div className="controls">
        <CreateForm />
        <GenerateButton generateEvent={this.props.generateEvent} />
      </div>
    );
  }
}

export default Controls;
import React from 'react';
import CreateForm from './CreateForm';
import GenerateButton from './GenerateButton';
import './scss/Controls.scss';

class Controls extends React.Component {
  render() {
    return (
      <div className="controls">
        <CreateForm />
        <GenerateButton />
      </div>
    );
  }
}

export default Controls;
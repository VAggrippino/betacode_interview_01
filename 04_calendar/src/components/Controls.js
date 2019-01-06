import React from 'react';
import CreateButton from './CreateButton';
import GenerateButton from './GenerateButton';
import './scss/Controls.scss';

class Controls extends React.Component {
  render() {
    return (
      <div className="Controls">
        <CreateButton />
        <GenerateButton />
      </div>
    );
  }
}

export default Controls;
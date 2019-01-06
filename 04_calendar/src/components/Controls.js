import React from 'react';
import CreateButton from './CreateButton';
import './scss/Controls.scss';

class Controls extends React.Component {
  render() {
    return (
      <div className="Controls">
        <CreateButton />
      </div>
    );
  }
}

export default Controls;
import React from 'react';
import Month from './Month';
import './scss/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="calendar">
        <header className="calendar--header">
          <h1>Calendar App</h1>
        </header>
        <main className="calendar--main">
          <Month />
        </main>
      </div>
    );
  }
}

export default App;
import React from 'react';
import Month from './Month';
import Controls from './Controls';
import './scss/App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faAngleRight);

class App extends React.Component {
  state = {
    activeDate: new Date()
  }

  getMonthName = () => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return month[this.state.activeDate.getMonth()];
  }

  render() {
    return (
      <div className="calendar">
        <header className="calendar--header">
          <button><FontAwesomeIcon icon="angle-left" /></button>
          <h1>{this.getMonthName()} {this.state.activeDate.getFullYear()}</h1>
          <button><FontAwesomeIcon icon="angle-right" /></button>
        </header>
        <aside className="calendar--controls">
          <Controls />
        </aside>
        <main className="calendar--main">
          <Month activeDate={this.state.activeDate} />
        </main>
      </div>
    );
  }
}

export default App;
import React from 'react';
import Month from './Month';
import Controls from './Controls';
import './scss/App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faAngleRight, faCalendarAlt);

class App extends React.Component {
  constructor(props) {
    super(props);
    const activeDate = new Date();

    this.state = {
      activeDate
    };
  }

  getMonthName = (date) => {
    const months = [
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

    return months[date.getMonth()];
  }

  onChangeMonth = (n) => {
    const month = this.state.activeDate.getMonth() + n;
    const newDate = new Date();
    newDate.setMonth(month);
    this.setState({activeDate: newDate});
  }

  render() {
    const activeDate = this.state.activeDate;
    const year = activeDate.getFullYear();
    const monthName = this.getMonthName(activeDate);

    return (
      <div className="calendar">
        <header className="calendar--header">
          <div className="apptitle">
            <div className="apptitle--logo">
              <FontAwesomeIcon icon="calendar-alt" />
            </div>
            <h1 className="apptitle--title">Calendar</h1>
          </div>
          <div className="display-month">
            <button
              className="calendar--header--month-button--previous"
              onClick={() => this.onChangeMonth(-1)}
            >
              <FontAwesomeIcon icon="angle-left" />
            </button>
            <button
              className="calendar--header--month-button--next"
              onClick={() => this.onChangeMonth(1)}
            >
              <FontAwesomeIcon icon="angle-right" />
            </button>
            <h1>{monthName} {year}</h1>
          </div>
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
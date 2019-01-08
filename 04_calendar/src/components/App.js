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

    const calendarEvents = [
      { date: '2019-01-01', description: "New Year's Day" },
      { date: '2019-02-14', description: "Valentine's Day" },
      { date: '2019-03-17', description: "Saint Patrick's Day" },
      { date: '2019-04-21', description: 'Easter' },
      { date: '2019-05-30', description: 'Kaamatan (Sabah)' },
      { date: '2019-05-31', description: 'Harvest Festival (Sabah)' },
      { date: '2019-05-12', description: "Mother's Day (Malaysia)" },
      { date: '2019-06-16', description: "Father's Day" },
      { date: '2019-07-04', description: 'Independence Day (U.S.)' },
      { date: '2019-08-11', description: 'Hari Raya Haji' },
      { date: '2019-09-19', description: 'Talk Like a Pirate Day' },
      { date: '2019-10-31', description: "Halloween" },
      { date: '2019-11-28', description: 'Thanksgiving (U.S.)' },
      { date: '2019-12-25', description: 'Christmas Day' }
    ];

    this.state = {
      activeDate,
      calendarEvents
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

  generateEvent = () => {
    // Select a random person
    const names = [
      'John Lennon',
      'Paul McCartney',
      'George Harrison',
      'Ringo Starr',
      'Goku Son',
      'Luffy',
      'Orochimaru',
      'Ichigo Kurosaki',
      'Tony Stark',
      'Steve Rogers',
      'Bruce Wayne',
      'Clark Kent',
      'Diana Prince',
      'Andromeda Doig',
      'Peter Parker',
      'Dwayne Johnson',
      'John McClane',
      'John Wick',
      'Jack Daniels'
    ];
    const person = names[Math.floor(Math.random()*names.length)];

    // Select a random date in this month
    const eventDate = new Date(this.state.activeDate);
    const year = eventDate.getFullYear();

    // 1-based month also helps figure out the last day of this month
    eventDate.setMonth(eventDate.getMonth()+1)
    const month = ('0' + eventDate.getMonth()).slice(-2);

    eventDate.setDate(0) // 0: last day of previous month
    const multiplier = eventDate.getDate();
    const day = ('0' + Math.ceil(Math.random() * multiplier)).slice(-2);

    const date = [year, month, day].join('-');
    const description = `Meeting with ${person}`

    const calendarEvents = this.state.calendarEvents.slice();
    calendarEvents.push({date, description});
    this.setState({calendarEvents});
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
          <Controls generateEvent={this.generateEvent} />
        </aside>
        <main className="calendar--main">
          <Month
            activeDate={this.state.activeDate}
            calendarEvents={this.state.calendarEvents}
          />
        </main>
      </div>
    );
  }
}

export default App;
import React from 'react';
import MonthDay from './MonthDay';
import './scss/Month.scss';

class Month extends React.Component {
  render() {
    // Copy the activeDate so I don't have to change it.
    const firstOfMonthDate = new Date(this.props.activeDate);

    // Determine what day of the week the month starts on.
    // getDay() starts on Sunday, but our calendar starts on Monday.
    firstOfMonthDate.setDate(1);
    const firstOfMonthDay = (firstOfMonthDate.getDay() === 0) ? 6 : firstOfMonthDate.getDay() - 1;

    // setDate() arguments start at 1.
    const dateViewStart = 1 - firstOfMonthDay;
    return (
      <div className="month">
        <div className="month--daystrip">
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
          <div>SUN</div>
        </div>
        <div className="month--days">
          {([...Array(42).keys()].map((day) => {
            const dayValue = dateViewStart + day;
            const dayDate = new Date(this.props.activeDate);
            dayDate.setDate(dayValue);
            return (
              <MonthDay key={day}
                calendarEvents={this.props.calendarEvents}
                activeDate={this.props.activeDate}
                date={dayDate}
              />
            );
          }))}
        </div>
      </div>
    );
  }
}

export default Month;
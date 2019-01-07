import React from 'react';
import MonthDay from './MonthDay';
import './scss/Month.scss';

class Month extends React.Component {
  render() {
    const activeDate = this.props.activeDate;

    // Determine what day of the week the month starts on.
    // getDay() starts on Sunday, but our calendar starts on Monday.
    activeDate.setDate(1);
    const firstOfMonth = (activeDate.getDay() === 0) ? 6 : activeDate.getDay() - 1;

    // setDate() arguments start at 1.
    const dateViewStart = 1 - firstOfMonth;

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
          {([...Array(35).keys()].map((day) => {
            const dayValue = dateViewStart + day;
            const dayDate = new Date();
            dayDate.setDate(dayValue);
            return <MonthDay key={day} date={dayDate.getDate()} />;
          }))}
        </div>
      </div>
    );
  }
}

export default Month;
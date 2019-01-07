import React from 'react';
import './scss/MonthDay.scss';

class MonthDay extends React.Component {
  getShortMonth = (n) => {
    const shortMonths = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return shortMonths[n];
  }

  render() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const dateToday = `${currentYear}-${currentMonth}-${currentDay}`;

    const displayDate = new Date(this.props.date);
    const displayYear = displayDate.getFullYear();
    const displayMonth = displayDate.getMonth();
    const displayDay = displayDate.getDate();
    const dateDisplay = `${displayYear}-${displayMonth}-${displayDay}`;

    const activeMonth = this.props.activeDate.getMonth();
    const activeYear = this.props.activeDate.getFullYear();

    let classNames = ["month--day"];
    if (dateToday === dateDisplay) classNames.push('today');

    if (activeYear === displayYear) {
      if (activeMonth > displayMonth) {
        classNames.push('previous-month');
      }
      if (activeMonth < displayMonth) {
        classNames.push('next-month');
      }
    } else {
      if (activeYear > displayYear) {
        classNames.push('previous-month');
      }
      if (activeYear < displayYear) {
        classNames.push('next-month');
      }
    }

    return (
      <div className={classNames.join(' ')}>
        <div className="month--day--date">{displayDay}</div>
      </div>
    );
  }
}

export default MonthDay;
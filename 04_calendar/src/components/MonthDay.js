import React from 'react';
import './scss/MonthDay.scss';

class MonthDay extends React.Component {
  render() {
    const myDate = new Date();
    myDate.setDate(this.props.date);
    return (
      <div className="month--day">
        <p>{myDate.getDate()}</p>
      </div>
    );
  }
}

export default MonthDay;
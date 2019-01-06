import React from 'react';
import MonthDay from './MonthDay';
import './scss/Month.scss';

class Month extends React.Component {
  render() {
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
          {[...Array(35).keys()].map((day) => {
            return <MonthDay key={day} />;
          })}
        </div>
      </div>
    );
  }
}

export default Month;
import React from 'react';
import './styles/dataPickerMonth.css';

const DatePickerMonths = props => {
  function addMonths() {
    let months = [];
    months = props.allMonths.map(month => {
      return(
        <td className="month">
          <span>{month}</span>
        </td>
      );
    });

    return months;
  };

  function getMonths() {
    let rows = [];
    let cells = [];
    let months = addMonths();

    months.forEach((row, i) => { 
      if (i % 3 !== 0 || i === 0) { // except zero index 
          cells.push(row); 
      } else { 
          rows.push(cells); 
          cells = [];
          cells.push(row); 
      }
    });
    rows.push(cells); // add last row

    let monthlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return monthlist;
  };

  return (
    <table className="calendar-month">
      <thead>
        <tr>
          <th colSpan="4" className="title">Select a Month</th>
        </tr>
      </thead>
      <tbody>
        {getMonths()}
      </tbody>
    </table>
  );
};

export default DatePickerMonths;
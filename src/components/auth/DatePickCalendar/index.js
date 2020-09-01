import React from "react";
import moment from 'moment';

import './styles/datePicker.css';

import DatePickerMonths from './datePickerMonths';

export default class DatePickerCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
      allmonths :moment.months(),
      showMonthTable: false,
    }

    this.getWeekDays = this.getWeekDays.bind(this);
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
    this.getEmptyDays = this.getEmptyDays.bind(this);
    this.generateMonth = this.generateMonth.bind(this);
  }

  getWeekDays = () => {
    const weekdayshort = moment.weekdaysShort();
    let weekdayshortname = weekdayshort.map(day => {
      return (
        <th key={day} className="week-day">
         {day}
        </th>
      );
   });

   return weekdayshortname;
  };

  firstDayOfMonth() {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                .startOf("month")
                .format("d"); 
    return firstDay;
  };

  getEmptyDays() {
    let blanks = [];
    const firstDay = this.firstDayOfMonth();

    for (let i = 0; i < firstDay; i++) {
      blanks.push(
        <td key={i + '0'} className="calendar-day empty">{""}</td>
      );
    }

    return blanks;
  };

  getCurrentDay() {
    return parseInt(this.state.dateObject.format("D"));
  }

  getDaysInMonth() {
    let daysInMonth = [];
    for (let d = 1; d <= this.state.dateObject.daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} className="calendar-day">
          <span className={`${d === this.getCurrentDay() ? "today" : ""}`}>
            {d}
          </span>
        </td>
      );
    }

    return daysInMonth;
  }

  generateMonth() {
    let emptyDays = this.getEmptyDays();
    let daysInMonth = this.getDaysInMonth();

    var totalSlots = [...emptyDays, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows 
        cells = []; // empty container 
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) { // when end loop we add remain date
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return daysinmonth;
  };

  getMonth() {
    return this.state.dateObject.format("MMMM");
  }

  toggleCalendarView() {
    return this.state.showMonthTable ? <DatePickerMonths allMonths={this.state.allmonths}/> : (<table>
      <thead>
        <tr className="weekday-day-row">
          {this.getWeekDays()}
        </tr>
      </thead>
      <tbody>
        {this.generateMonth()}
      </tbody>
    </table>);
  }

  render() {
    return (
      <div className="outer">
        <h2>Calendar</h2>
        <DatePickerMonths allMonths={this.state.allmonths}/>
        <div className="tail-datetime-calendar">
          <div className="calendar-navi">
            {this.getMonth()}
          </div>
        </div>
        {this.toggleCalendarView()}
        
      </div>
    );
  }
}
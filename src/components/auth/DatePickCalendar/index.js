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
    this.onShowMonth = this.onShowMonth.bind(this);
    this.getDay = this.getDay.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.showEvent = this.showEvent.bind(this);
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

  showEvent(d) {
    // let test = this.props.events.findIndex(event => this.checkDate(event, d));
    // test++;
    // console.log(test);

    // return test ? <div className="spot"></div> : '';
  }

  checkDate(event, d) {
    let month = this.getMonth().split(' ');
    let monthNo = (this.state.allmonths.indexOf(month[0]) + 1).toString().padStart(2, "0");
    let day = d.toString().padStart(2, "0");
    let startDate = event.start.split('T');
    let endDate = event.end.split('T');

    if ((startDate[0] === `${monthNo}-${day}-${month[1]}`) || (startDate[0] === `${monthNo}-${day}-${month[1]}`)) {
      return true;
    } else {
      startDate = startDate[0].split('-');
      endDate = endDate[0].split('-')
      return (startDate[0] === monthNo || endDate[0] === monthNo) && (startDate[2] === month[1] || endDate === month[1]) && (parseInt(startDate[1]) > parseInt(day) && parseInt(endDate[1] < parseInt(day)))
    }

    // if (this.props.events.findIndex(event => (event.start.split('T')[0] === `${monthNo}-${day}-${month[1]}`) || (event.end.split('T')[0] === `${monthNo}-${day}-${month[1]}`)) !== -1) {
    //   return true;
    // } else {
    //   let startDate = event.start.split('T')[0].split('-');
    //   let endDate = event.end.split('T')[0].split('-');
    //   console.log(parseInt(startDate[1]));
    //   console.log(parseInt(day))
    //   return (startDate[0] === monthNo || endDate[0] === monthNo) && (startDate[2] === month[1] || endDate === month[1]) && (parseInt(startDate[1]) > parseInt(day) && parseInt(endDate[1] < parseInt(day)))
    // }
  }

  getDaysInMonth() {
    let daysInMonth = [];
    for (let d = 1; d <= this.state.dateObject.daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} name={d} className="calendar-day" onClick={this.getDay}>
          <span className={`${d === this.getCurrentDay() ? "today" : ""} show-day`}>
            {d}
            {this.showEvent(d)}
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
    return this.state.dateObject.format("MMMM YYYY");
  }

  toggleCalendarView() {
    return this.state.showMonthTable ? <DatePickerMonths allMonths={this.state.allmonths} setMonth={this.setMonth}/> : (<table>
      <thead>
        <tr className="weekday-day-row">
          {this.getWeekDays()}
        </tr>
      </thead>
      <tbody>
        {this.generateMonth()}
      </tbody>
    </table>);
  };

  onShowMonth() {
    this.setState({
      showMonthTable: !this.state.showMonthTable
    })
  }

  getDay(e) {
    e.preventDefault();
    const month = (this.state.dateObject.month() + 1).toString().padStart(2, "0");
    const day = (parseInt(e.target.innerText)).toString().padStart(2, "0");
    let date = `${month}-${day}-${this.state.dateObject.year()}`;

    this.setState({
      dateObject: moment(date, "MM-DD-YYYY")
    });
  }

  setMonth(e) {
    let monthNo = this.state.allmonths.indexOf(e.target.innerText);// get month number 
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo); // change month value
    this.setState({
      dateObject, // add to state
      showMonthTable: !this.state.showMonthTable
    });
  };

  changeMonth(e) {
    let dateObject = Object.assign({}, this.state.dateObject);
    if(e.target.id === 'next') {
      dateObject = moment(dateObject).set("month", this.state.dateObject.month() + 1); // change month value
    } else {
      dateObject = moment(dateObject).set("month", this.state.dateObject.month() - 1); // change month value
    }

    this.setState({
      dateObject
    });
  }

  render() {
    return (
      <div className="outer">
        <div className="tail-datetime-calendar">
          <div className="calendar-navi">
            <div className="caret left-caret" id="prev" onClick={this.changeMonth}>
              <svg onClick={this.changeMonth} id="prev" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path onClick={this.changeMonth} id="prev" d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
              </svg>
            </div>
            <div className="month-title" onClick={this.onShowMonth}>
              {this.getMonth()}
            </div>
            <div className="caret right-caret" id="next" onClick={this.changeMonth}>
              <svg onClick={this.changeMonth} id="next" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path onClick={this.changeMonth} id="next" d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
            </div>
          </div>
        </div>
        {this.toggleCalendarView()}
        
      </div>
    );
  }
}
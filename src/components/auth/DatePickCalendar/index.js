import React from "react";
import moment from 'moment';

export default class DatePickerCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.getWeekDays = this.getWeekDays.bind(this);
  }
  getWeekDays() {
    const weekdayshort = moment.weekdaysShort();
    let weekdayshortname = weekdayshort.map(day => {
      return (
        <th key={day} className="week-day">
         {day}
        </th>
      );
   });

   return weekdayshortname;
  }
  render() {
    return (
      <div>
        <h2>Calendar</h2>
        <table>
          <thead>
            <tr>
              {this.getWeekDays()}
            </tr>
        </thead>
        </table>
      </div>
    );
  }
}
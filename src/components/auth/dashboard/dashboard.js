import React from 'react';
import '../../../styles/background-colors.css';

import DatePickerCalendar from '../DatePickCalendar/index';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          start: '09-01-2020T12:00',
          end: '09-12-2020T18:30'
        }
      ]
    }
  }
  render() {
    return (
      <div className="w-100 h-100 background">
        <h1>Dashboard</h1>
        <DatePickerCalendar events={this.state.events}/>
      </div>
      
    )
  }
};

export default Dashboard;
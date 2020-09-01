import React from 'react';
import '../../../styles/background-colors.css';

import SmallCalendar from './smallCalendar';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="w-100 h-100 background">
        <h1>Dashboard</h1>
        <SmallCalendar/>
      </div>
      
    )
  }
};

export default Dashboard;
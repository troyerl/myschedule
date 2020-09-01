import React from "react";

import { Card } from 'react-bootstrap';
import DatePickerCalendar from '../DatePickCalendar/index';

const SmallCalendar = props => {
  return (
    <Card style={{ width: '18rem' }}>
      <DatePickerCalendar/>
    </Card>
  )
}

export default SmallCalendar;
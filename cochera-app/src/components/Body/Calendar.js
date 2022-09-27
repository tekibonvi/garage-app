import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Calendario() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
        <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} />
        </div>
        <p>
            <span className='bold'>Fecha de Nacimiento:</span>{' '}
            {date.toDateString()}
        </p>
    </div>
  );
}

export default Calendario;
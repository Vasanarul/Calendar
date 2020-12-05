import React, { useState, useEffect } from 'react';
import moment from "moment";
import '../index.css';

function Next () {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const startDay = value.clone().add(1, "week").startOf("week");
  const endDay = value.clone().add(1, "week").endOf("week");
  const AM = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const PM = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//   const [color, setColor] = useState("blue");

    useEffect(() =>{
      const day = startDay.clone().subtract(1, "day");
      const a = [];

      while(day.isBefore(endDay, "day")) {
        a.push(
          Array(7).fill(0)
            .map(() => day.add(1, "day").clone())
        )
      }

      setCalendar(a);
    }, [value])

  return (
    console.log(calendar),
    <div className="calendar">
      {calendar.map((day) => (
        <div>
          <div className="day" key={day._d}>{day.toString()}</div>
          <br></br>
        </div>
      ))}
      <div>
        {AM.map((hour) => (
          <div>
            <div>{hour} AM</div>
            <br></br>
          </div>
        ))}
      </div>
      <div>
        {PM.map((hour) => (
          <div>
            <div>{hour} PM</div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Next;
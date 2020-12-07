import React, { useState, useEffect } from 'react';
import moment from "moment";
import '../index.css';

function Current () {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const startDay = value.clone().startOf("week");
  const endDay = value.clone().endOf("week");
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
      <br></br>
      {calendar.map((week) => (
        <div>
          {week.map((day) => (
            <div className="day" key={day._d}>{day.toString()}</div>
          ))}
        </div>
      ))}
      <br></br>
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

export default Current;
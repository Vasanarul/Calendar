import React, { useState, useEffect } from 'react';
import moment from "moment";
import '../index.css';

function Last () {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const startDay = value.clone().subtract(1, "week").startOf("week");
  const endDay = value.clone().subtract(1, "week").endOf("week");
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
    </div>
  )
}

export default Last;
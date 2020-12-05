import React, { useState, useEffect } from 'react';
import moment from "moment";
import '../index.css';

import Current from './Current.jsx';
import Last from './Last.jsx';
import Next from './Next.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Calendar () {

  return (
    <div>
      <Router>
        <div>
          <nav>
            <Link to="/">{`Current Week  |  `}</Link>
            <Link to="/last">{`Last Week  |  `}</Link>
            <Link to="/next">{`Next Week`}</Link>
          </nav>
          <Switch>
            <Route path="/last">
              <Last />
            </Route>
            <Route path="/next">
              <Next />
            </Route>
            <Route path="/">
              <Current />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Calendar;

// function Calendar () {
//   const [calendar, setCalendar] = useState([]);
//   const [value, setValue] = useState(moment());
//   const startDay = value.clone().startOf("month").startOf("week");
//   const endDay = value.clone().endOf("month").endOf("week");
// //   const [color, setColor] = useState("blue");

//     useEffect(() =>{
//       const day = startDay.clone().subtract(1, "day");
//       const a = [];

//       while(day.isBefore(endDay, "day")) {
//         a.push(
//           Array(7).fill(0)
//             .map(() => day.add(1, "day").clone())
//         )
//       }

//       setCalendar(a);
//     }, [value])

//   return (
//     <div className="calendar">
//       {
//         calendar.map((week) =>
//         <div>
//           {week.map((day) => (
//             <div className="day">{day.format("D").toString()}</div>
//           ))}
//         </div>)
//       }
//     </div>
//   )
// }

// export default Calendar;
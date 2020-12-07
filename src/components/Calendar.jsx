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
            <Link to="/last">{`Last Week  |  `}</Link>
            <Link to="/">{`Current Week  |  `}</Link>
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
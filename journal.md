11/30/20

6:00pm

Today I began the initial server setup and react rendering of the application. In looking to how to best represent the visible grid that one can see on a Google Calendar I am exploring both css grid and material UI options.

I am going to first focus on the functionality of the calendar and then add Material Ui components as time allows

12/1/20

3:00PM

Realizing it might be best to break up the components, having one for days, another for hours, thus reducing the amount of code in App component

4:45PM

Downloaded Moment.js for time accuracy

5:10

Following tutotials and looking through React documentation, seems like the best way to transmit the dates is to use moment and an array that I can map through to identify each date from the beginning of this week till the end of the month

5:40
Adding useState to account for changes one could make in the calendar, also added useEffect to avoid the error of having "too many renders"

12/4/20

Breakthrough, used Moment.js to get dates for this week, the previous week, and the following week. Now working on using React Router to navigate between the dates



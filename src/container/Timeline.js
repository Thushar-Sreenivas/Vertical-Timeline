import React from 'react'
import moment from 'moment'
import TimelineDisplay from '../component/TimelineDisplay'

const eventDetails = [
    { ts: "2017-09-17T12:22:46.587Z", text: "Logged in" },
    { ts: "2017-09-17T12:21:46.587Z", text: "Clicked Home Page" },
  ];


const TimelineLogic = (event) => {

const userEventDetails = {};
  event.map((event, index) => {
    const date = moment(event.ts).format("DD MMM YYYY");
    const userEventArray = userEventDetails[date] || [];
    userEventArray.push({
      time: moment(event.ts).format("HH mm"),
      text: event.text,
      key: index
    });
    userEventDetails[date] = userEventArray;
  });
  return userEventDetails;
};

const Timeline = ({events}) => {
const userEvent = TimelineLogic(events)
console.log("Timeline -> userEvent", userEvent)
const dates = Object.keys(userEvent)
return(
 <div>
     {dates.map(date => (
         <ul key={date}>
                 <h1>{date}</h1>
             <TimelineDisplay events={userEvent[date]} />
         </ul>
             
     ))}
 </div>   
)
}

export default Timeline
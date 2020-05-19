import React, { useState } from 'react'

 const TimelineDisplay = ({events}) => {
    const [eventShow, setEventShow] = useState(events)
    const clickHandler = (key) => {
        console.log("Clicked", key);
        setEventShow(eventShow.filter((event) => event.key !== key))
        
    }

 console.log("timelineDisplay -> events", events)
    return (
        eventShow.map(event => (
        <div key ={event.key} onClick={() => clickHandler(event.key)} >
          {event.text} : {event.time}
      </div>
        ))
    )
}

export default TimelineDisplay


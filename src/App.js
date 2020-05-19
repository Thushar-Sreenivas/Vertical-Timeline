import React, { useState } from 'react';
import './App.css';
import Timeline from './container/Timeline';

const eventDetails = [
  { ts: "2017-09-17T12:22:46.587Z", text: "Logged in" },
  { ts: "2017-09-17T12:21:46.587Z", text: "Clicked Home Page" },
  { ts: "2017-09-17T12:20:46.587Z", text: "Edited Profile" },
  { ts: "2017-09-16T12:22:46.587Z", text: "Registered" },
  { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
  { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
  { ts: "2017-09-16T12:20:46.587Z", text: "Clicked Checkout" }
];

function App() {
  const [time, setTime] = useState('')
  const [text, setText] = useState('')
  const [events, setEvent] = useState(eventDetails)


  const onTextChangeHandler = (event) => {
    setText(event.target.value)
  }
  
  const onTimeChangeHandler = (event) => {
    setTime(event.target.value)
  }

  const formSubmitHandler = (event) => {
    setEvent(events => [...events, { ts: time, text: text }])
    console.log("App -> events", events)

    event.preventDefault()
  }
  // console.log("App -> events", events)

  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={formSubmitHandler} >
        <label htmlFor={text}>Text</label>
        <input id='text' placeholder="Text" onChange={onTextChangeHandler} />
        <label htmlFor={time}>Time</label>
        <input id='time' placeholder="Time" onChange={onTimeChangeHandler} />
        <button>Submit</button>
        <h2>{text} : {time}</h2>
      </form>
      <Timeline events={events}/>
    </div>
  );
}

export default App;

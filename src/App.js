import './App.css';
import './style.css'
import React from 'react';

const now = () => ({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds()
})


const startClock = () => {
  const time = now();

  const secondDegrees = 270 + time.seconds * 6; // 360/60 = 6 so, second-hand rotates 360 degrees in 60 seconds
  const minuteDegrees = 270 + time.minutes * 6;
  const hourDegrees = 270 + time.hours * 30 + time.minutes * (360 / 12 / 60); // hour moves 360/12 for 60 minutes within

  const hourHand = document.getElementsByClassName('hand hour-hand')[0];
  const minuteHand = document.getElementsByClassName('hand minute-hand')[0];
  const secondHand = document.getElementsByClassName('hand second-hand')[0];

  hourHand.style.transform = `rotate(${hourDegrees}deg) translate(50%)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg) translate(50%)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg) translate(30%)`;

  // document.querySelector('h1').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}` 
};
class App extends React.Component {
  constructor() {
    super();
    setInterval(() => {
      startClock();
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div id="clock-${id}" class="clock">
          <div class="hand second-hand" id="clock-${id}-second-hand"></div>
          <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
          <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
          <div class="clock-center"></div>
        </div>
      </div>
    )
  };
}

export default App;

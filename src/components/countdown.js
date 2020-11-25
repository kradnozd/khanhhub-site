import React from "react"

import "./countdown.css"

const CountDown = () => {
  const [state, setState] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const target_date = new Date("Dec 1, 2020")

  const updateCountdown = () => {
    let current_date = new Date().getTime()
    let seconds_left = (target_date - current_date) / 1000

    const newState = { ...state }
    newState.days = pad(parseInt(seconds_left / 86400))
    seconds_left = seconds_left % 86400

    newState.hours = pad(parseInt(seconds_left / 3600))
    seconds_left = seconds_left % 3600

    newState.minutes = pad(parseInt(seconds_left / 60))
    newState.seconds = pad(parseInt(seconds_left % 60))

    setState({ ...newState })
  }

  setInterval(function () {
    updateCountdown()
  }, 1000)

  return (
    <div id="countdown">
      <div id="tiles">
        <span>{state.days || "00"}</span>
        <span>{state.hours || "00"}</span>
        <span>{state.minutes || "00"}</span>
        <span>{state.seconds || "00"}</span>
      </div>
      <div className="labels">
        <li>Days</li>
        <li>Hours</li>
        <li>Mins</li>
        <li>Secs</li>
      </div>
    </div>
  )
}

const pad = n => {
  return (n < 10 ? "0" : "") + n
}

export default CountDown

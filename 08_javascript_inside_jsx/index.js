import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <div>
      <h1>Good {timeOfDay}!</h1>
      <h2>It's {hours} on the clock </h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
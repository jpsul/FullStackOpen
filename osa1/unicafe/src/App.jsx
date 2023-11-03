import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {

  const allFeedbacks = () => good + neutral + bad

  if (allFeedbacks() > 0)
  return (
    <p>
      Good: {good}<br/>
      Neutral: {neutral}<br/>
      Bad: {bad}<br/>
      All: {allFeedbacks()}
    </p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allFeedbacks = () => good + neutral + bad

  const incrementGood = () => (setGood(good + 1))
  const incrementNeutral = () => (setNeutral(neutral + 1))
  const incrementBad = () => (setBad(bad + 1))

  return (
    <div>
      <h2>Give feedback</h2>

      <button onClick={incrementGood}>Good</button>
      <button onClick={incrementNeutral}>Neutral</button>
      <button onClick={incrementBad}>Bad</button>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

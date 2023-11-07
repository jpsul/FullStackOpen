import { useState } from 'react'

const StatisticLine = ({text, value, unit}) => <tr><td>{text}:</td><td>{value} {unit}</td></tr>

const Statistics = ({good, neutral, bad}) => {

  const allFeedbacks = () => good + neutral + bad
  const feedbackAverage = () => {
    return (good + (-1*bad)) / allFeedbacks()
  }
  const positivePercent = () => {
    return good / allFeedbacks() * 100.0
  }

  if (allFeedbacks() > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} unit=""/>
          <StatisticLine text="neutral" value={neutral} unit=""/>
          <StatisticLine text="bad" value={bad} unit=""/>
          <StatisticLine text="all" value={allFeedbacks()} unit=""/>
          <StatisticLine text="average" value={feedbackAverage()} unit=""/>
          <StatisticLine text="positive" value={positivePercent()} unit="%"/>
        </tbody>
      </table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  } 
}

const Button = ({handleClick, buttonText}) => <button onClick={handleClick}>{buttonText}</button>

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
      <h2>give feedback</h2>

      <Button handleClick={incrementGood} buttonText="good"/>
      <Button handleClick={incrementNeutral} buttonText="neutral"/>
      <Button handleClick={incrementBad} buttonText="bad"/>

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

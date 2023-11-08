import { useState } from 'react'

const Header = ({text}) => (<h2>{text}</h2>)

const BestAnecdote = ({anecdotes, points}) => {
  let max_points = Math.max(...points)

  const findBest = () => {
    return anecdotes[points.indexOf(max_points)]
    
  }

  return (
    <div>
      {findBest()}<br/>
      has {max_points} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const anec_length = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anec_length).fill(0))

  const changeAnecdote = () => {
    let rand_num = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand_num)
  }
  const vote = () => {
    let new_points = points.map((value, index) => {
      if (index === selected) {
        return value + 1
      } else {
        return value
      }
    })
    setPoints(new_points)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      {anecdotes[selected]}<br/>
      has {points[selected]} votes
      <p>
        <button onClick={vote}>vote</button>
        <button onClick={changeAnecdote}>next anecdote</button>
      </p>
      <Header text="Anecdote with most votes"/>
      {Math.max(...points) > 0 ? <BestAnecdote anecdotes={anecdotes} points={points}/> : "No votes given yet"}
    </div>
  )
}

export default App

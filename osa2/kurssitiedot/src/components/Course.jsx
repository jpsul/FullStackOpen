const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
    {props.parts.map((part, index) => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
    </>
  )
}

const Total = (props) => {
  const totalExercises = props.parts.reduce((acc, currValue) => {return acc + currValue.exercises}, 0)
  return (
    <strong>
      total of {totalExercises} exercises
    </strong>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

export default Course

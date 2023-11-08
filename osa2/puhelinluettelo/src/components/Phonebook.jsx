import PhonebookPerson from './PhonebookPerson'

const Phonebook = (props) => {
  return (
    <div>
      {props.persons.map((person) => <PhonebookPerson key={person.id} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default Phonebook

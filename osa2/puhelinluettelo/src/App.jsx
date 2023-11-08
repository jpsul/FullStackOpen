import { useState } from 'react'

import Filter from './components/Filter'
import Phonebook from './components/Phonebook'
import NewPersonForm from './components/NewPersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', id: 1, number: '+35844123123'},
    {name: 'Kalle Kehveli', id: 2, number: '+35845990990'},
    {name: 'Robin Hood', id: 3, number: '+45-74379663'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [visiblePersons, setVisiblePersons] = useState(persons)

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const personExists = persons.some((person) => person.name === newName)
    if (personExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        id: persons.length + 1,
        number: newNumber
      }

      let newPersons = persons.concat(newPerson)
      setPersons(newPersons)
      setNewName('')
      setNewNumber('')
      setVisiblePersons(newPersons)
    }
  }

  const handleFilterChange = (event) => {
    let searchValue = event.target.value.toLowerCase()
    let filtered = persons
    if (searchValue.length > 0) {
      filtered = persons.filter((person) => person.name.toLowerCase().includes(searchValue))
    }
    setVisiblePersons(filtered)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handleFilterChange}/>

      <h2>Add a new</h2>
      <NewPersonForm
        handleSubmit={handleFormSubmit}
        handleNameChange={handleNameInputChange}
        name={newName}
        handleNumberChange={handleNumberInputChange}
        number={newNumber}
      />
      
      <h2>Numbers</h2>
      <Phonebook persons={visiblePersons}/>
    </div>
  )
}

export default App

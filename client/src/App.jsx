import EventForm from './components/EventForm'
import EventList from './components/EventList'
import { useState } from 'react'
import './App.css'
import EmployeesList from './components/ExployeesList';
import EmployeesForm from './components/ExployeesForm';

function App() {

const [events, setEvents] = useState([]);
const [employees, setEmployees] = useState([]);

  return (
    <>
     <h1>My Events</h1>
     <EventForm setEvents={setEvents}/>
     <EventList events={events} setEvents={setEvents}/>
     <EmployeesList employees={employees} setEmployees={setEmployees}/>
     <EmployeesForm employees={employees} setEmployees={setEmployees}/>
    </>
  )
}

export default App

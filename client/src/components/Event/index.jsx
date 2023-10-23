/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import axios from 'axios'

const Event = ({event, handleDelete}) => {
    //  we will have many of this component!

    // EACH ONE will have a show form state
    const [show, setShow] = useState(false);
    const [newDescription, setNewDescription] = useState(event.description);


    const handleClick = (eventId) => {
        // axios call to our PUT Route
        // id, new information
        // PUT        /events/:id eventId/:newDesc  /events/:idOfEvent/
        axios({
            url: `/server/events/${eventId}`,
            method: "PUT",
            data: {
                description: newDescription
            } // FIND THIS IN THE REQ.BODY
        })
    };

  return (
    <div key={event._id} className="event-item">
    <button onClick={() => handleDelete(event._id)}>Delete</button>
    <button onClick={() => setShow(!show)}>Edit</button>
    <h2>{event.title}</h2>
    <p>Date: {event.date}</p>
    <p>Location: {event.location}</p>
    <p>Description: {event.description}</p>
    <div className="organizer">
      <strong>Organizer:</strong>
      <p>Name: {event.organizer.name}</p>
      <p>Role: {event.organizer.role}</p>
    </div>
    {/* show form? */}
    { show ? <form onSubmit={(e) => e.preventDefault()}>
    <input value = {newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
    <button onClick={() => handleClick(event._id)}>Update this Description</button>
    </form> 
    : <></>}
  </div>
  )
}

export default Event
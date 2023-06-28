import { useState, useEffect } from 'react';
import { findDetails } from '../../utilities/events-api';
import { useParams } from 'react-router-dom';
// import handleChange from '../../components/EventForm/EventForm'
import handleSubmit from '../../components/EventForm/EventForm'





export function EventDetailsPage() {
    const {id} = useParams()
    const [event, setEvent] = useState({

    })

    async function handleUpdate(evt) {
      evt.preventDefault()
      alert('clicked')
     }

  
     useEffect (function () {
        async function getDetails() {
            console.log('yooo')
            const details = await findDetails(id)
            setEvent(details)
            console.log(details)
        } 
        getDetails();
     }, [])
    return (
        <>
        <h1>Details Page</h1>
        <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <p>{event.name}</p>
          <label>Phone No.</label>
          <p>{event.phone}</p>
          <label>Email</label>
          <p>{event.email}</p>
          <label>Address</label>
          <p>{event.address}</p>
          <label>Type of Event</label>
          <p>{event.eventType}</p>
          <label>Number of Guests</label>
          <p>{event.numOfGuests}</p>
          <label>Date</label>
          <p>{event.date}</p>
          <label>Serving Time</label>
          <div>
            <select name="servingTime" required >
                <option>{event.servingTime}</option>
            </select>
            <select name="servingTimeAMPM" value={event.servingTimeAMPM}required >
                <option >{event.servingTimeAMPM}</option>
               
            </select>

          </div>
          <label>Meal Package</label>
          <select  required>
            <option>{event.mealPackage}</option>
            </select>
          <button onClick={handleUpdate}>Update Event Request</button>
          <button type="submit">Delete Request</button>
        </form>
      </div>
  
        </>

    )
    
}
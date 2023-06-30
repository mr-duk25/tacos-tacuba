import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { findDetails } from '../../utilities/events-api';
import { useParams } from 'react-router-dom';
import handleSubmit from '../../components/EventForm/EventForm'
import * as eventsAPI from '../../utilities/events-api'
import { useNavigate } from 'react-router-dom';







export function EventDetailsPage() {
    const {id} = useParams()
    const navigate = useNavigate();
    const [event, setEvent] = useState({})

    async function handleDelete(evt) {
      evt.preventDefault()
       await eventsAPI.deleteEvent(event)
      navigate(`/events`)
     }



  
     useEffect (function () {
        async function getDetails() {
            const details = await findDetails(id)
            setEvent(details)
            console.log(details)
        } 
        getDetails();
     }, [id])
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
          <Link to ={`/events/${event._id}/update`}><button >Edit Event Request</button></Link>
          <button onClick={handleDelete}>Delete Request</button>
        </form>
      </div>
  <hr />
  <div>
    
  </div>
        </>

    )
    
}